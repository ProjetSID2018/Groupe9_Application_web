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
 
##################################################
#					PAGE INDEX					#   
##################################################
@app.route('/test', methods = ['GET'])
def general():
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
        "source": "dix",
        "nombre": 783
    },
    '11':{
        "source": "onze",
        "nombre": 7823
    },
    '12':{
        "source": "douze",
        "nombre": 78223
    }}
    resp = jsonify(data)
    resp.status_code = 200
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp  
   
@app.route('/test1', methods = ['GET'])
def general1():
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
    data = {
   '1': {
        "name": "France",
        "pourcentage" : "50%"
    }}
    resp = jsonify(data)
    resp.status_code = 200
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp 

@app.route('/gauge', methods = ['GET'])
def gauge():
	data = {
	'1': {
		"feeling": "Degout",
		"pourcent" : "50"
	},
	'2': {
		"feeling": "Peur",
		"pourcent" : "20"
	},
	'3': {
		"feeling": "Joie",
		"pourcent" : "80"
	}}
	resp = jsonify(data)
	resp.status_code = 200
	resp.headers.add('Access-Control-Allow-Origin', '*')
	return resp 


##################################################
#					PAGE THEME					#   
##################################################

 
@app.route('/theme', methods = ['GET'])
def theme():
    data = {
	'1':{
		"theme" : "Art et Culture",
		"effectif" : 31090763
	},
	'2':{
		"theme" : "Economie",
		"effectif" : 61801570
	},
	'3':{
		"theme" : "Science",
		"effectif" : 73137148
	},
	'4':{
		"theme" : "Sports",
		"effectif" : 74856000
	},
	'5':{
		"theme" : "France",
		"effectif" : 79716203
	},
	'6':{
		"theme" : "International",
		"effectif" : 81902307
	},
	'7':{
		"theme" : "Santé",
		"effectif" : 141850000
	}}
    resp = jsonify(data)
    resp.status_code = 200
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp 
 
@app.route('/trend/<string:vparam1>', methods = ['GET'])
def trend(vparam1):
	#theme =request.args.get('theme')
	print(vparam1)
	data = {
	'1':{
		"mot" : "verbe",
		"tendance" : "tendance1"
	},
	'2':{
		"mot" : "Nom",
		"tendance" : "tendance2"
	},
	'3':{
		"mot" : "Adjectif",
		"tendance" : "tendance3"
	}}
	resp = jsonify(data)
	resp.status_code = 200
	resp.headers.add('Access-Control-Allow-Origin', '*')
	return resp 

@app.route('/cloud/<string:vparam1>', methods = ['GET'])
def cloud(vparam1):
    print(vparam1)
    data_first = {
    '1':{
        "text" : "Lorem",
        "weight" : 13
    },
    '2':{
        "text" : "Ipsum",
        "weight" : 10.5
    },
    '3':{
        "text" : "Dolor",
        "weight" : 9.4
    },
    '4':{
        "text" : "Sit",
        "weight" : 8
    },
    '5':{
        "text" : "Amet",
        "weight" : 6.2
    },
    '6':{
        "text" : "Consectetur",
        "weight" : 5
    },
    '7':{
        "text" : "Adipiscing",
        "weight" : 5
    }}
    data_bis = {
    '1':{
        "text" : "Arbre",
        "weight" : 13
    },
    '2':{
        "text" : "Bol",
        "weight" : 10.5
    },
    '3':{
        "text" : "Cerceau",
        "weight" : 9.4
    },
    '4':{
        "text" : "Domino",
        "weight" : 8
    },
    '5':{
        "text" : "Elephant",
        "weight" : 6.2
    },
    '6':{
        "text" : "Fabriquer",
        "weight" : 5
    },
    '7':{
        "text" : "Gateau",
        "weight" : 5
    }}
    data_ter = {
    '1':{
        "text" : "Hibou",
        "weight" : 13
    },
    '2':{
        "text" : "Important",
        "weight" : 10.5
    },
    '3':{
        "text" : "Joyeux",
        "weight" : 9.4
    },
    '4':{
        "text" : "Lalala",
        "weight" : 8
    },
    '5':{
        "text" : "Mouton",
        "weight" : 6.2
    },
    '6':{
        "text" : "Négation",
        "weight" : 5
    },
    '7':{
        "text" : "Obligation",
        "weight" : 5
    }}
    if vparam1 == '_international':
        data = data_first
    elif vparam1 == '_france':
        data = data_bis
    else:
        data = data_ter
    resp = jsonify(data)
    resp.status_code = 200
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp 

if __name__ == '__main__':
  app.run(debug=True)