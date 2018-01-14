# -*- coding: utf-8 -*-
"""
Created on Tue Jan  9 12:22:10 2018

@author: mathi
"""

from flask import Flask, request,  jsonify, Response
import json
from flask_restful import Resource, Api
import json
app = Flask(__name__)
api = Api(app)


# @app.route('/general', methods = ['POST'])
# def general():
#     #--> requete sur la base
#     #--> appel de l'API du groupe statiques
#     
#     data = {
#         'nbart'  : 2000,
#         'source' : ["lemonde", "le figaro", "le nouvel obs"]
#     }
#     resp = jsonify(data)
#     resp.status_code = 200
#     resp.headers.add('Access-Control-Allow-Origin', '*')
#     return resp
# 
# @app.route('/theme', methods = ['GET'])
# def theme():
#     #--> requete sur la base
#     #--> appel de l'API du groupe statiques
#     word =request.args.get('word')  
#     source = request.args.get('source')  
#     print(word, source)
#     data = {
#         'src'  : source,
#         'word' :word,
#         'tendancy' : {'month':'-','week':'+','day':'+-'},
#         'verbe':{'verbe' : 'atomiser','month':'+','week':'-','day':'--'},
#         'theme':{'culture' : 1,'politic':80,'humor':19}
#     }
#     resp = jsonify(data)
#     resp.status_code = 200
#     resp.headers.add('Access-Control-Allow-Origin', '*')
#     return resp
    
@app.route('/test', methods = ['GET'])
def general():
    #--> requete sur la base
    #--> appel de l'API du groupe statiques
    
    data = {
   '1': {
        "source": "figaro",
        "nombre" : 210
    },
    '2':{
        "source": "monde",
        "nombre": 2015
    },
    '3':{
        "source": "depeche",
        "nombre" : 50
    },
    '4':{
        "source": "set",
        "nombre": 45
    },
    '5':{
        "source": "truc",
        "nombre" : 544
    },
    '6':{
        "source": "ouai",
        "nombre": 45
    },
    '7':{
        "source": "plus",
        "nombre" : 76
    },
    '8':{
        "source": "trente",
        "nombre": 71
    },
    '9':{
        "source": "aller",
        "nombre" : 828
    },
    '10':{
        "source": "test",
        "nombre": 783
    }}
    resp = jsonify(data)
    resp.status_code = 200
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp  
   
@app.route('/test1', methods = ['GET'])
def general1():
    #--> requete sur la base
    #--> appel de l'API du groupe statiques
    
    data = {
   '1': {
        "text": "figaro",
        "weight" : 1
    },
    '2':{
        "text": "monde",
        "weight": 2
    },
    '3':{
        "text": "depeche",
        "weight" : 3
    },
    '4':{
        "text": "set",
        "weight": 4
    },
    '5':{
        "text": "truc",
        "weight" : 5
    },
    '6':{
        "text": "ouai",
        "weight": 6
    },
    '7':{
        "text": "plus",
        "weight" : 7
    },
    '8':{
        "text": "trente",
        "weight": 8
    },
    '9':{
        "text": "aller",
        "weight" : 9
    },
    '10':{
        "text": "test",
        "weight": 10
    }}
    resp = jsonify(data)
    resp.status_code = 200
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp


@app.route('/test2', methods = ['GET'])
def general2():
    #--> requete sur la base
    #--> appel de l'API du groupe statiques
    
    data = {
   '1': {
        "name": "France",
        "pourcentage" : "50%"
    }}
    resp = jsonify(data)
    resp.status_code = 200
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp 
   
if __name__ == '__main__':
  app.run()