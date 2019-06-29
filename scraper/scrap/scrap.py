import requests
import xmltodict
import pymongo
import json
import pprint
from env import SERVICE_KEY

# connection = pymongo.MongoClient(mongo_server, 27017)

client = pymongo.MongoClient('localhost', 27017)

db = client["emergency-info"]

collection = db["emergency_list"]

basic_url = f'http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEgytListInfoInqire?serviceKey={SERVICE_KEY}'

list_arr = []

for i in range(1, 41):
    list_url = basic_url + '&pageNo=' + str(i) + '&numOfRows=10'
    list_url_res = requests.get(list_url)
    print("list_url ", list_url)
    converted_list = json.loads(json.dumps(xmltodict.parse(list_url_res.text)))
    emergency_list = converted_list["response"]["body"]["items"]["item"]
    
    if len(emergency_list) > 1:
        for emergency in emergency_list:
            emergency_detail_url = f'http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEgytBassInfoInqire?serviceKey={SERVICE_KEY}&HPID=' + emergency["hpid"]

            emergency_detail = requests.get(emergency_detail_url)

            converted_emergency_detail = json.loads(json.dumps(xmltodict.parse(emergency_detail.text)))

            # list_of_treat = ""
            # if converted_emergency_detail["response"]["body"]["items"]["item"]["dgidIdName"] is not None:
            #     list_of_treat = converted_emergency_detail["response"]["body"]["items"]["item"]["dgidIdName"]
            
            extract_info = {
                "hospital_name": emergency["dutyName"],
                "hospital_call": emergency["dutyTel1"],
                "hospital_emergency_call": emergency.get("dutyTel3", ""),
                "hospital_address": emergency["dutyAddr"],
                "hospital_id": emergency["hpid"],
                "list_of_treat": converted_emergency_detail["response"]["body"]["items"]["item"].get("dgidIdName", "")
            }
            list_arr.append(extract_info)
    elif len(emergency_list) == 1:
        for emergency in emergency_list:
            emergency_detail_url = f'http://apis.data.go.kr/B552657/ErmctInfoInqireService/getEgytBassInfoInqire?serviceKey={SERVICE_KEY}&HPID=' + emergency_list["hpid"]

            emergency_detail = requests.get(emergency_detail_url)

            converted_emergency_detail = json.loads(json.dumps(xmltodict.parse(emergency_detail.text)))

            list_of_treat = converted_emergency_detail["response"]["body"]["items"]["item"]["dgidIdName"]

            extract_info = {
                "hospital_name": emergency_list["dutyName"],
                "hospital_call": emergency_list["dutyTel1"],
                "hospital_emergency_call": emergency_list["dutyTel3"],
                "hospital_address": emergency_list["dutyAddr"],
                "hospital_id": emergency_list["hpid"],
                "list_of_treat": list_of_treat
            }
            list_arr.append(extract_info)
    else:
        break

for i in list_arr:
    collection.insert_one(i)

