#!/usr/bin/env python3
"""Provides some stats about Nginx logs stored in MongoDB"""
from pymongo import MongoClient


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    logs = client.logs.nginx

    total = logs.count_documents({})
    print("{} logs".format(total))

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = logs.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, count))

    status_check = logs.count_documents({"method": "GET", "path": "/status"})
    print("{} status check".format(status_check))
