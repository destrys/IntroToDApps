(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "contractName": "Adoption",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "adopters",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x43ae80d3"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xf851a440"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "petI",
          "type": "uint256"
        }
      ],
      "name": "adopt",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x8588b2c5"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "petId",
          "type": "uint256"
        }
      ],
      "name": "unadopt",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x90b84029"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAdopters",
      "outputs": [
        {
          "name": "",
          "type": "address[16]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x3de4eb17"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5033601060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610512806100616000396000f3fe60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633de4eb171461007257806343ae80d3146100c55780638588b2c51461014057806390b840291461018f578063f851a440146101de575b600080fd5b34801561007e57600080fd5b50610087610235565b6040518082601060200280838360005b838110156100b2578082015181840152602081019050610097565b5050505090500191505060405180910390f35b3480156100d157600080fd5b506100fe600480360360208110156100e857600080fd5b81019080803590602001909291905050506102b6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561014c57600080fd5b506101796004803603602081101561016357600080fd5b81019080803590602001909291905050506102eb565b6040518082815260200191505060405180910390f35b34801561019b57600080fd5b506101c8600480360360208110156101b257600080fd5b81019080803590602001909291905050506103cb565b6040518082815260200191505060405180910390f35b3480156101ea57600080fd5b506101f361049c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61023d6104c2565b60006010806020026040519081016040528092919082601080156102ac576020028201915b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610262575b5050505050905090565b6000816010811015156102c557fe5b016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008082101580156102fe5750600f8211155b151561030957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008360108110151561033057fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561037457600080fd5b3360008360108110151561038457fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550819050919050565b60008082101580156103de5750600f8211155b15156103e957600080fd5b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561044557600080fd5b6000808360108110151561045557fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550819050919050565b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6102006040519081016040528060109060208202803883398082019150509050509056fea165627a7a7230582099f48c97471af36867cff5af1ec97b21284e6de3e17b7b21a0c2fe92cd55f8670029",
  "deployedBytecode": "0x60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633de4eb171461007257806343ae80d3146100c55780638588b2c51461014057806390b840291461018f578063f851a440146101de575b600080fd5b34801561007e57600080fd5b50610087610235565b6040518082601060200280838360005b838110156100b2578082015181840152602081019050610097565b5050505090500191505060405180910390f35b3480156100d157600080fd5b506100fe600480360360208110156100e857600080fd5b81019080803590602001909291905050506102b6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561014c57600080fd5b506101796004803603602081101561016357600080fd5b81019080803590602001909291905050506102eb565b6040518082815260200191505060405180910390f35b34801561019b57600080fd5b506101c8600480360360208110156101b257600080fd5b81019080803590602001909291905050506103cb565b6040518082815260200191505060405180910390f35b3480156101ea57600080fd5b506101f361049c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61023d6104c2565b60006010806020026040519081016040528092919082601080156102ac576020028201915b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610262575b5050505050905090565b6000816010811015156102c557fe5b016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008082101580156102fe5750600f8211155b151561030957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008360108110151561033057fe5b0160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561037457600080fd5b3360008360108110151561038457fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550819050919050565b60008082101580156103de5750600f8211155b15156103e957600080fd5b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561044557600080fd5b6000808360108110151561045557fe5b0160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550819050919050565b601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6102006040519081016040528060109060208202803883398082019150509050509056fea165627a7a7230582099f48c97471af36867cff5af1ec97b21284e6de3e17b7b21a0c2fe92cd55f8670029",
  "sourceMap": "25:763:0:-;;;114:56;8:9:-1;5:2;;;30:1;27;20:12;5:2;114:56:0;153:10;145:5;;:18;;;;;;;;;;;;;;;;;;25:763;;;;;;",
  "deployedSourceMap": "25:763:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;688:96;;8:9:-1;5:2;;;30:1;27;20:12;5:2;688:96:0;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;688:96:0;;;;;;;;;;;;;;;;54:27;;8:9:-1;5:2;;;30:1;27;20:12;5:2;54:27:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;54:27:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;198:214;;8:9:-1;5:2;;;30:1;27;20:12;5:2;198:214:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;198:214:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;442:204;;8:9:-1;5:2;;;30:1;27;20:12;5:2;442:204:0;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;442:204:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;87:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;87:20:0;;;;;;;;;;;;;;;;;;;;;;;;;;;688:96;732:18;;:::i;:::-;769:8;762:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;688:96;:::o;54:27::-;;;;;;;;;;;;;;;;;;;;;;;;;:::o;198:214::-;240:4;272:1;264:4;:9;;:23;;;;;285:2;277:4;:10;;264:23;256:32;;;;;;;;332:3;306:30;;:8;315:4;306:14;;;;;;;;;;;;;;;;;;;;:30;;;298:39;;;;;;;;373:10;356:8;365:4;356:14;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;401:4;394:11;;198:214;;;:::o;442:204::-;487:4;520:1;511:5;:10;;:25;;;;;534:2;525:5;:11;;511:25;503:34;;;;;;;;569:5;;;;;;;;;;;555:19;;:10;:19;;;547:28;;;;;;;;612:3;586:8;595:5;586:15;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;634:5;627:12;;442:204;;;:::o;87:20::-;;;;;;;;;;;;;:::o;25:763::-;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;25:763:0;;;;:::o",
  "source": "pragma solidity ^0.5.0;\n\ncontract Adoption {\n    \n    address[16] public adopters;\n    address public admin;\n\n    constructor() public {\n        admin = msg.sender;\n    }\n\n    // Adopting a pet\n    function adopt(uint petI) public returns (uint) {\n        require(petI >= 0 && petI <= 15);\n        require(adopters[petI] == address(0x0));        \n\n        adopters[petI] = msg.sender;\n\n        return petI;\n    }\n\n    // UNadopting a pet\n    function unadopt(uint petId) public returns (uint) {\n        require(petId >= 0 && petId <= 15);\n        require(msg.sender == admin);\n\n        adopters[petId] = address(0x0);\n\n        return petId;\n    }\n\n    \n    // Retrieving the adopters\n    function getAdopters() public view returns (address[16] memory) {\n        return adopters;\n    }\n \n}\n",
  "sourcePath": "/Users/destry/code/destrys/IntroToDApps/pet-shop-tutorial/contracts/Adoption.sol",
  "ast": {
    "absolutePath": "/Users/destry/code/destrys/IntroToDApps/pet-shop-tutorial/contracts/Adoption.sol",
    "exportedSymbols": {
      "Adoption": [
        99
      ]
    },
    "id": 100,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 99,
        "linearizedBaseContracts": [
          99
        ],
        "name": "Adoption",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5,
            "name": "adopters",
            "nodeType": "VariableDeclaration",
            "scope": 99,
            "src": "54:27:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$16_storage",
              "typeString": "address[16]"
            },
            "typeName": {
              "baseType": {
                "id": 2,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "54:7:0",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 4,
              "length": {
                "argumentTypes": null,
                "hexValue": "3136",
                "id": 3,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "62:2:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": null,
                  "typeString": null
                },
                "value": "16"
              },
              "nodeType": "ArrayTypeName",
              "src": "54:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$16_storage_ptr",
                "typeString": "address[16]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7,
            "name": "admin",
            "nodeType": "VariableDeclaration",
            "scope": 99,
            "src": "87:20:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 6,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "87:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15,
              "nodeType": "Block",
              "src": "135:35:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 13,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10,
                      "name": "admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "145:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 11,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 171,
                        "src": "153:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 12,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "153:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "145:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 14,
                  "nodeType": "ExpressionStatement",
                  "src": "145:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 16,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "125:2:0"
            },
            "returnParameters": {
              "id": 9,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "135:0:0"
            },
            "scope": 99,
            "src": "114:56:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 52,
              "nodeType": "Block",
              "src": "246:166:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 30,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 26,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 24,
                            "name": "petI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "264:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 25,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "272:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "264:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 29,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 27,
                            "name": "petI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "277:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3135",
                            "id": 28,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "285:2:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_15_by_1",
                              "typeString": "int_const 15"
                            },
                            "value": "15"
                          },
                          "src": "277:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "264:23:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 23,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        174,
                        175
                      ],
                      "referencedDeclaration": 174,
                      "src": "256:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 31,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "256:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 32,
                  "nodeType": "ExpressionStatement",
                  "src": "256:32:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 40,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 34,
                            "name": "adopters",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5,
                            "src": "306:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$16_storage",
                              "typeString": "address[16] storage ref"
                            }
                          },
                          "id": 36,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 35,
                            "name": "petI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "315:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "306:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "307830",
                              "id": 38,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "332:3:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 37,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "324:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 39,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "324:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "306:30:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 33,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        174,
                        175
                      ],
                      "referencedDeclaration": 174,
                      "src": "298:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 41,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "298:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42,
                  "nodeType": "ExpressionStatement",
                  "src": "298:39:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 48,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 43,
                        "name": "adopters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "356:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$16_storage",
                          "typeString": "address[16] storage ref"
                        }
                      },
                      "id": 45,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 44,
                        "name": "petI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "365:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "356:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 46,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 171,
                        "src": "373:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 47,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "373:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "356:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 49,
                  "nodeType": "ExpressionStatement",
                  "src": "356:27:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 50,
                    "name": "petI",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 18,
                    "src": "401:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 22,
                  "id": 51,
                  "nodeType": "Return",
                  "src": "394:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 53,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "adopt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18,
                  "name": "petI",
                  "nodeType": "VariableDeclaration",
                  "scope": 53,
                  "src": "213:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "213:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "212:11:0"
            },
            "returnParameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 53,
                  "src": "240:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "240:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "239:6:0"
            },
            "scope": 99,
            "src": "198:214:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 87,
              "nodeType": "Block",
              "src": "493:153:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 67,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 63,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 61,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55,
                            "src": "511:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 62,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "520:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "511:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 66,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 64,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55,
                            "src": "525:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3135",
                            "id": 65,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "534:2:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_15_by_1",
                              "typeString": "int_const 15"
                            },
                            "value": "15"
                          },
                          "src": "525:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "511:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 60,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        174,
                        175
                      ],
                      "referencedDeclaration": 174,
                      "src": "503:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 68,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "503:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 69,
                  "nodeType": "ExpressionStatement",
                  "src": "503:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 74,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 71,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 171,
                            "src": "555:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 72,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "555:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 73,
                          "name": "admin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7,
                          "src": "569:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "555:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 70,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        174,
                        175
                      ],
                      "referencedDeclaration": 174,
                      "src": "547:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "547:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 76,
                  "nodeType": "ExpressionStatement",
                  "src": "547:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 77,
                        "name": "adopters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "586:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$16_storage",
                          "typeString": "address[16] storage ref"
                        }
                      },
                      "id": 79,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "petId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55,
                        "src": "595:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "586:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "307830",
                          "id": 81,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "612:3:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0x0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 80,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "604:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 82,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "604:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "586:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 84,
                  "nodeType": "ExpressionStatement",
                  "src": "586:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 85,
                    "name": "petId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 55,
                    "src": "634:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 59,
                  "id": 86,
                  "nodeType": "Return",
                  "src": "627:12:0"
                }
              ]
            },
            "documentation": null,
            "id": 88,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unadopt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55,
                  "name": "petId",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "459:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "459:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "458:12:0"
            },
            "returnParameters": {
              "id": 59,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "487:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 57,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "487:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "486:6:0"
            },
            "scope": 99,
            "src": "442:204:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 97,
              "nodeType": "Block",
              "src": "752:32:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 95,
                    "name": "adopters",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5,
                    "src": "769:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$16_storage",
                      "typeString": "address[16] storage ref"
                    }
                  },
                  "functionReturnParameters": 94,
                  "id": 96,
                  "nodeType": "Return",
                  "src": "762:15:0"
                }
              ]
            },
            "documentation": null,
            "id": 98,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAdopters",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 89,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "708:2:0"
            },
            "returnParameters": {
              "id": 94,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 93,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 98,
                  "src": "732:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$16_memory_ptr",
                    "typeString": "address[16]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 90,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "732:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 92,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "3136",
                      "id": 91,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "740:2:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "16"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "732:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$16_storage_ptr",
                      "typeString": "address[16]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "731:20:0"
            },
            "scope": 99,
            "src": "688:96:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 100,
        "src": "25:763:0"
      }
    ],
    "src": "0:789:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/destry/code/destrys/IntroToDApps/pet-shop-tutorial/contracts/Adoption.sol",
    "exportedSymbols": {
      "Adoption": [
        99
      ]
    },
    "id": 100,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 99,
        "linearizedBaseContracts": [
          99
        ],
        "name": "Adoption",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5,
            "name": "adopters",
            "nodeType": "VariableDeclaration",
            "scope": 99,
            "src": "54:27:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$16_storage",
              "typeString": "address[16]"
            },
            "typeName": {
              "baseType": {
                "id": 2,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "54:7:0",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 4,
              "length": {
                "argumentTypes": null,
                "hexValue": "3136",
                "id": 3,
                "isConstant": false,
                "isLValue": false,
                "isPure": false,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "62:2:0",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": null,
                  "typeString": null
                },
                "value": "16"
              },
              "nodeType": "ArrayTypeName",
              "src": "54:11:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$16_storage_ptr",
                "typeString": "address[16]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 7,
            "name": "admin",
            "nodeType": "VariableDeclaration",
            "scope": 99,
            "src": "87:20:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 6,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "87:7:0",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15,
              "nodeType": "Block",
              "src": "135:35:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 13,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 10,
                      "name": "admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7,
                      "src": "145:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 11,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 171,
                        "src": "153:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 12,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "153:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "145:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 14,
                  "nodeType": "ExpressionStatement",
                  "src": "145:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 16,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "125:2:0"
            },
            "returnParameters": {
              "id": 9,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "135:0:0"
            },
            "scope": 99,
            "src": "114:56:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 52,
              "nodeType": "Block",
              "src": "246:166:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 30,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 26,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 24,
                            "name": "petI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "264:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 25,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "272:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "264:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 29,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 27,
                            "name": "petI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "277:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3135",
                            "id": 28,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "285:2:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_15_by_1",
                              "typeString": "int_const 15"
                            },
                            "value": "15"
                          },
                          "src": "277:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "264:23:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 23,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        174,
                        175
                      ],
                      "referencedDeclaration": 174,
                      "src": "256:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 31,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "256:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 32,
                  "nodeType": "ExpressionStatement",
                  "src": "256:32:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 40,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 34,
                            "name": "adopters",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5,
                            "src": "306:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$16_storage",
                              "typeString": "address[16] storage ref"
                            }
                          },
                          "id": 36,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 35,
                            "name": "petI",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "315:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "306:14:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "307830",
                              "id": 38,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "332:3:0",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 37,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "324:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 39,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "324:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "306:30:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 33,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        174,
                        175
                      ],
                      "referencedDeclaration": 174,
                      "src": "298:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 41,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "298:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 42,
                  "nodeType": "ExpressionStatement",
                  "src": "298:39:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 48,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 43,
                        "name": "adopters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "356:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$16_storage",
                          "typeString": "address[16] storage ref"
                        }
                      },
                      "id": 45,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 44,
                        "name": "petI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "365:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "356:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 46,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 171,
                        "src": "373:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 47,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "373:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "356:27:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 49,
                  "nodeType": "ExpressionStatement",
                  "src": "356:27:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 50,
                    "name": "petI",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 18,
                    "src": "401:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 22,
                  "id": 51,
                  "nodeType": "Return",
                  "src": "394:11:0"
                }
              ]
            },
            "documentation": null,
            "id": 53,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "adopt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 19,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 18,
                  "name": "petI",
                  "nodeType": "VariableDeclaration",
                  "scope": 53,
                  "src": "213:9:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 17,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "213:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "212:11:0"
            },
            "returnParameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 53,
                  "src": "240:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "240:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "239:6:0"
            },
            "scope": 99,
            "src": "198:214:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 87,
              "nodeType": "Block",
              "src": "493:153:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 67,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 63,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 61,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55,
                            "src": "511:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 62,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "520:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "511:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 66,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 64,
                            "name": "petId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 55,
                            "src": "525:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3135",
                            "id": 65,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "534:2:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_15_by_1",
                              "typeString": "int_const 15"
                            },
                            "value": "15"
                          },
                          "src": "525:11:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "511:25:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 60,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        174,
                        175
                      ],
                      "referencedDeclaration": 174,
                      "src": "503:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 68,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "503:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 69,
                  "nodeType": "ExpressionStatement",
                  "src": "503:34:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 74,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 71,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 171,
                            "src": "555:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 72,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "555:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 73,
                          "name": "admin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7,
                          "src": "569:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "555:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 70,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        174,
                        175
                      ],
                      "referencedDeclaration": 174,
                      "src": "547:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 75,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "547:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 76,
                  "nodeType": "ExpressionStatement",
                  "src": "547:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 83,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 77,
                        "name": "adopters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "586:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$16_storage",
                          "typeString": "address[16] storage ref"
                        }
                      },
                      "id": 79,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 78,
                        "name": "petId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 55,
                        "src": "595:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "586:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "307830",
                          "id": 81,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "612:3:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0x0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 80,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "604:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 82,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "604:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "586:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 84,
                  "nodeType": "ExpressionStatement",
                  "src": "586:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 85,
                    "name": "petId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 55,
                    "src": "634:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 59,
                  "id": 86,
                  "nodeType": "Return",
                  "src": "627:12:0"
                }
              ]
            },
            "documentation": null,
            "id": 88,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unadopt",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 55,
                  "name": "petId",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "459:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 54,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "459:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "458:12:0"
            },
            "returnParameters": {
              "id": 59,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 88,
                  "src": "487:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 57,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "487:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "486:6:0"
            },
            "scope": 99,
            "src": "442:204:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 97,
              "nodeType": "Block",
              "src": "752:32:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 95,
                    "name": "adopters",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5,
                    "src": "769:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$16_storage",
                      "typeString": "address[16] storage ref"
                    }
                  },
                  "functionReturnParameters": 94,
                  "id": 96,
                  "nodeType": "Return",
                  "src": "762:15:0"
                }
              ]
            },
            "documentation": null,
            "id": 98,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAdopters",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 89,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "708:2:0"
            },
            "returnParameters": {
              "id": 94,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 93,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 98,
                  "src": "732:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$16_memory_ptr",
                    "typeString": "address[16]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 90,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "732:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 92,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "3136",
                      "id": 91,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "740:2:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "16"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "732:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$16_storage_ptr",
                      "typeString": "address[16]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "731:20:0"
            },
            "scope": 99,
            "src": "688:96:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 100,
        "src": "25:763:0"
      }
    ],
    "src": "0:789:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0xac08B9485087A0bB473D05B05503f44dB5083950",
      "transactionHash": "0x55058dc4bcd5c6a6a757ad6737a0c3364ef1862d8a4724fba89faa2edd6c44f2"
    },
    "5777": {
      "events": {},
      "links": {},
      "address": "0xCd893794090ab3F4d49D7CC9DB29AfB600d863E7",
      "transactionHash": "0x0f69aac8abb7d467f2fb21297e979d3fcf38875967b473cedab4942764505bf3"
    }
  },
  "schemaVersion": "3.0.3",
  "updatedAt": "2019-03-25T20:48:56.999Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}
},{}],2:[function(require,module,exports){
App = {
    web3Provider: null,
    contracts: {},

    init: async function() {
        // Load pets.
        var data = require('../pets.json');        
        var petsRow = $('#petsRow');
        var petTemplate = $('#petTemplate');

        for (i = 0; i < data.length; i ++) {
            petTemplate.find('.panel-title').text(data[i].name);
            petTemplate.find('img').attr('src', data[i].picture);
            petTemplate.find('.pet-breed').text(data[i].breed);
            petTemplate.find('.pet-age').text(data[i].age);
            petTemplate.find('.pet-location').text(data[i].location);
            petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

            petsRow.append(petTemplate.html());
        };
        
        return await App.initWeb3();
    },

    initWeb3: async function() {
        // Modern dapp browsers...
        if (window.ethereum) {
            App.web3Provider = window.ethereum;
            try {
                // Request account access
                await window.ethereum.enable();
            } catch (error) {
                // User denied account access...
                console.error("User denied account access")
            }
        }
        // Legacy dapp browsers...
        else if (window.web3) {
            App.web3Provider = window.web3.currentProvider;
        }
        // If no injected web3 instance is detected, fall back to Ganache
        else {
            console.log('Warning: web3 not included in browser');            
            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
        }
        web3 = new Web3(App.web3Provider);

        return App.initContract();
    },

    initContract: function() {
        var AdoptionArtifact = require('../../build/contracts/Adoption.json');        
        // Get the necessary contract artifact file and instantiate it with truffle-contract
        App.contracts.Adoption = TruffleContract(AdoptionArtifact);

        // Set the provider for our contract
        App.contracts.Adoption.setProvider(App.web3Provider);

        App.markAdopted();

        App.setAdmin();
        
        // Use our contract to retrieve and mark the adopted pets
        return App.bindEvents();        
    },

    bindEvents: function() {
        $(document).on('click', '.btn-adopt', App.handleAdopt);
        $(document).on('click', '.btn-unadopt', App.handleUnadopt);        
    },

    setAdmin: function() {
        var adoptionInstance;

        App.contracts.Adoption.deployed().then(function(instance) {
            adoptionInstance = instance;

            return adoptionInstance.admin.call();
        }).then(function(adminAddress) {
            if (adminAddress !== web3.eth.accounts[0]) {
                $('.badge-admin').hide();
                $('.btn-unadopt').hide();
            }
        }).catch(function(err) {
            console.log(err.message);
        });
    },
    markAdopted: function(adopters, account) {
        var adoptionInstance;

        App.contracts.Adoption.deployed().then(function(instance) {
            adoptionInstance = instance;

            return adoptionInstance.getAdopters.call();
        }).then(function(adopters) {
            for (i = 0; i < adopters.length; i++) {
                if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
                    $('.panel-pet').eq(i).find('button').filter('.btn-adopt').text('Success').attr('disabled', true);
                    $('.panel-pet').eq(i).find('button').filter('.btn-unadopt').attr('disabled', false);                    
                }
            }
        }).catch(function(err) {
            console.log(err.message);
        });
    },

    handleAdopt: function(event) {
        event.preventDefault();

        var petId = parseInt($(event.target).data('id'));

        var adoptionInstance;

        web3.eth.getAccounts(function(error, accounts) {
            if (error) {
                console.log(error);
            }

            var account = accounts[0];

            App.contracts.Adoption.deployed().then(function(instance) {
                adoptionInstance = instance;

                // Execute adopt as a transaction by sending account
                return adoptionInstance.adopt(petId, {from: account});
            }).then(function(result) {
                return App.markAdopted();
            }).catch(function(err) {
                console.log(err.message);
            });
        });
    },
    handleUnadopt: function(event) {
        event.preventDefault();

        var petId = parseInt($(event.target).data('id'));

        var adoptionInstance;

        web3.eth.getAccounts(function(error, accounts) {
            if (error) {
                console.log(error);
            }

            var account = accounts[0];

            App.contracts.Adoption.deployed().then(function(instance) {
                adoptionInstance = instance;

                // Execute unadopt
                return adoptionInstance.unadopt(petId, {from: account});
            }).then(function(result) {
                return App.markAdopted();
            }).catch(function(err) {
                console.log(err.message);
            });
        });
    }

};

$(function() {
    $(window).load(function() {
        App.init();
    });
});

},{"../../build/contracts/Adoption.json":1,"../pets.json":3}],3:[function(require,module,exports){
module.exports=[
  {
    "id": 0,
    "name": "Frieda",
    "picture": "images/scottish-terrier.jpeg",
    "age": 3,
    "breed": "Scottish Terrier",
    "location": "Lisco, Alabama"
  },
  {
    "id": 1,
    "name": "Gina",
    "picture": "images/scottish-terrier.jpeg",
    "age": 3,
    "breed": "Scottish Terrier",
    "location": "Tooleville, West Virginia"
  },
  {
    "id": 2,
    "name": "Collins",
    "picture": "images/french-bulldog.jpeg",
    "age": 2,
    "breed": "French Bulldog",
    "location": "Freeburn, Idaho"
  },
  {
    "id": 3,
    "name": "Melissa",
    "picture": "images/boxer.jpeg",
    "age": 2,
    "breed": "Boxer",
    "location": "Camas, Pennsylvania"
  },
  {
    "id": 4,
    "name": "Jeanine",
    "picture": "images/french-bulldog.jpeg",
    "age": 2,
    "breed": "French Bulldog",
    "location": "Gerber, South Dakota"
  },
  {
    "id": 5,
    "name": "Elvia",
    "picture": "images/french-bulldog.jpeg",
    "age": 3,
    "breed": "French Bulldog",
    "location": "Innsbrook, Illinois"
  },
  {
    "id": 6,
    "name": "Latisha",
    "picture": "images/golden-retriever.jpeg",
    "age": 3,
    "breed": "Golden Retriever",
    "location": "Soudan, Louisiana"
  },
  {
    "id": 7,
    "name": "Coleman",
    "picture": "images/golden-retriever.jpeg",
    "age": 3,
    "breed": "Golden Retriever",
    "location": "Jacksonwald, Palau"
  },
  {
    "id": 8,
    "name": "Nichole",
    "picture": "images/french-bulldog.jpeg",
    "age": 2,
    "breed": "French Bulldog",
    "location": "Honolulu, Hawaii"
  },
  {
    "id": 9,
    "name": "Fran",
    "picture": "images/boxer.jpeg",
    "age": 3,
    "breed": "Boxer",
    "location": "Matheny, Utah"
  },
  {
    "id": 10,
    "name": "Leonor",
    "picture": "images/boxer.jpeg",
    "age": 2,
    "breed": "Boxer",
    "location": "Tyhee, Indiana"
  },
  {
    "id": 11,
    "name": "Dean",
    "picture": "images/scottish-terrier.jpeg",
    "age": 3,
    "breed": "Scottish Terrier",
    "location": "Windsor, Montana"
  },
  {
    "id": 12,
    "name": "Stevenson",
    "picture": "images/french-bulldog.jpeg",
    "age": 3,
    "breed": "French Bulldog",
    "location": "Kingstowne, Nevada"
  },
  {
    "id": 13,
    "name": "Kristina",
    "picture": "images/golden-retriever.jpeg",
    "age": 4,
    "breed": "Golden Retriever",
    "location": "Sultana, Massachusetts"
  },
  {
    "id": 14,
    "name": "Ethel",
    "picture": "images/golden-retriever.jpeg",
    "age": 2,
    "breed": "Golden Retriever",
    "location": "Broadlands, Oregon"
  },
  {
    "id": 15,
    "name": "Terry",
    "picture": "images/golden-retriever.jpeg",
    "age": 2,
    "breed": "Golden Retriever",
    "location": "Dawn, Wisconsin"
  }
]

},{}]},{},[2]);
