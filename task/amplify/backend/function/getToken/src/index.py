import json
import requests

def handler(event, context):
    print('received event:')
    print(event)

    try:
        token = requests.post("https://melp-system.onrender.com/auth/access_token").json()
    except:
        return build_response(data="Internal Server Error", status_code=500)

    return build_response(data=token,status_code=200)


def build_response(data, status_code):
    return {
        'statusCode': status_code,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps(data)
    }
