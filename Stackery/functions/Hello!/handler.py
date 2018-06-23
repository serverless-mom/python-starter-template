def handler(message, context):
    print(message)

    return {
    "Content-Type": "text/html",
    "body": "<h1>Hello, the current time is 15:40:19.009371</h1>",
    "statusCode": 200
}


handler('hello','david')