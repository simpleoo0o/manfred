window.staticConfig = {
    header: {
        style: {
            backgroundImage: 'url(./img/header-bg.png)',
            backgroundSize: '100% 100%',
            padding: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '152px'
        },
        logo: {
            src: './img/logo.png',
            style: {
                width: 'auto',
                height: 'auto'
            }
        }
    },
    content: {
        data: [
            {
                name: 'Startseite',
                img: {
                    items: [
                        './img/CuttingTools_1151x642.png',
                        './img/Factories_1151x642.jpg',
                        './img/Overview_1151x642.png',
                        './img/visualstudioformacinstaller.png'
                    ]
                },
                template: 'template1',
                text: [
                    'Bei uns finden Sie preiswerte Werkzeuge für die Metallbearbeitung!',
                    'zum aktuellen '
                ],
                aText: 'Angebot',
                aHrefPath: ['Produkte', 'Drehwerkzeuge']

            },
            {
                name: 'Produkte',
                children: [
                    {
                        name: 'Drehwerkzeuge',
                        template: 'template2',
                        content: [
                            {
                                type: 'bigBoldText',
                                text: 'Wendeschneidplatten zum Drehen',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'imgAndText',
                                settings: [
                                    {
                                        img: './img/1.png',
                                        text: 'Drehen_Stähle'
                                    },
                                    {
                                        img: './img/1.png',
                                        text: 'Drehen_Edelstähle'
                                    },
                                    {
                                        img: './img/1.png',
                                        text: 'Drehen_Grauguss'
                                    }
                                ],
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'group',
                                settings: [
                                    {
                                        type: 'bigBoldText',
                                        text: 'Angebot',
                                        style: {
                                            marginLeft: '20px',
                                        }
                                    },
                                    {
                                        type: 'text',
                                        text: '(Alle Preise in Euro zzgl. MwSt.)',
                                        style: {
                                            marginTop: '10px',
                                            marginLeft: '16px'
                                        }
                                    },
                                ]
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '8px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'CNMG 12 04 08 - PM  MC4025\n',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '8px'
                                }
                            },
                            {
                                type: 'group',
                                settings: [
                                    {
                                        type: 'text',
                                        text: 'ab 20 Stück',
                                        style: {
                                            marginLeft: '40px',
                                        }
                                    },
                                    {
                                        type: 'boldText',
                                        text: '4,19 €',
                                        style: {
                                            color: 'red',
                                            marginLeft: '20px'
                                        }
                                    },
                                    {
                                        type: 'text',
                                        text: 'pro Stück',
                                        style: {
                                            marginLeft: '3px'
                                        }
                                    },
                                ]
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '4px'
                                }
                            },
                            {
                                type: 'group',
                                settings: [
                                    {
                                        type: 'text',
                                        text: 'ab 50 Stück',
                                        style: {
                                            marginLeft: '40px',
                                        }
                                    },
                                    {
                                        type: 'boldText',
                                        text: '3,99 €',
                                        style: {
                                            color: 'red',
                                            marginLeft: '20px'
                                        }
                                    },
                                    {
                                        type: 'text',
                                        text: 'pro Stück',
                                        style: {
                                            marginLeft: '3px'
                                        }
                                    },
                                ]
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '4px'
                                }
                            },
                            {
                                type: 'group',
                                settings: [
                                    {
                                        type: 'text',
                                        text: 'oder',
                                        style: {
                                            marginLeft: '80px',
                                        }
                                    },
                                    {
                                        type: 'boldText',
                                        text: 'auf Anfrage',
                                        style: {
                                            color: 'red',
                                            marginLeft: '8px'
                                        }
                                    }
                                ]
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '8px'
                                }
                            },
                            {
                                type: 'line',
                                style: {
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '8px'
                                }
                            },
                            {
                                type: 'boldText',
                                text: 'Die Preise und Lieferzeiten erhalten Sie auf Anfrage:',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '8px'
                                }
                            },
                            {
                                type: 'text',
                                text: 'sales@manfred-tools.com',
                                style: {
                                    marginLeft: '20px',
                                    color: '#0b76c1'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '8px'
                                }
                            },
                            {
                                type: 'text',
                                text: '(Bitte immer die Stückzahlen angeben)',
                                style: {
                                    marginLeft: '20px',
                                }
                            },

                        ]
                    }, {
                        name: 'Fräswerkzeuge',
                        template: 'template2',
                        content: [
                            {
                                type: 'blank',
                                style: {
                                    height: '32px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'Liebe Kunden,',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'zur Zeit steht noch keine offizielle Preisliste für',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'diese Produkte zur Verfügung.',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'Bei Interesse können Sie sich gerne per E-Mail',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'an uns direkt wenden.',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '50px'
                                }
                            },
                            {
                                type: 'line',
                                style: {
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'Die Preise und Lieferzeiten erhalten Sie auf Anfrage:',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '4px'
                                }
                            },
                            {
                                type: 'text',
                                text: 'sales@manfred-tools.com',
                                style: {
                                    marginLeft: '20px',
                                    color: '#0b76c1'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '4px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: '(Bitte immer die Stückzahlen angeben)',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                        ]
                    }, {
                        name: 'Bohrer',
                        template: 'template2',
                        content: [
                            {
                                type: 'blank',
                                style: {
                                    height: '32px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'Liebe Kunden,',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'zur Zeit steht noch keine offizielle Preisliste für',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'diese Produkte zur Verfügung.',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'Bei Interesse können Sie sich gerne per E-Mail',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'an uns direkt wenden.',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '50px'
                                }
                            },
                            {
                                type: 'line',
                                style: {
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'Die Preise und Lieferzeiten erhalten Sie auf Anfrage:',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '4px'
                                }
                            },
                            {
                                type: 'text',
                                text: 'sales@manfred-tools.com',
                                style: {
                                    marginLeft: '20px',
                                    color: '#0b76c1'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '4px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: '(Bitte immer die Stückzahlen angeben)',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                        ]
                    }, {
                        name: 'Fräser',
                        template: 'template2',
                        content: [
                            {
                                type: 'blank',
                                style: {
                                    height: '32px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'Liebe Kunden,',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'zur Zeit steht noch keine offizielle Preisliste für',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'diese Produkte zur Verfügung.',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'Bei Interesse können Sie sich gerne per E-Mail',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'an uns direkt wenden.',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '50px'
                                }
                            },
                            {
                                type: 'line',
                                style: {
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '16px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: 'Die Preise und Lieferzeiten erhalten Sie auf Anfrage:',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '4px'
                                }
                            },
                            {
                                type: 'text',
                                text: 'sales@manfred-tools.com',
                                style: {
                                    marginLeft: '20px',
                                    color: '#0b76c1'
                                }
                            },
                            {
                                type: 'blank',
                                style: {
                                    height: '4px'
                                }
                            },
                            {
                                type: 'bigBoldText',
                                text: '(Bitte immer die Stückzahlen angeben)',
                                style: {
                                    marginLeft: '20px'
                                }
                            },
                        ]
                    }
                ]
            },
            {
                name: 'Service',
                children: [
                    {
                        name: 'Deutschland',
                        template: 'template2'
                    }, {
                        name: 'China'
                    }
                ]
            },
            {
                name: 'Karriere',
                children: [
                    {
                        name: 'Stellenangebote',
                        template: 'template2'
                    }, {
                        name: 'Praktikum'
                    }
                ]
            },
            {
                name: 'Kontakt'
            }
        ],
        style: {
            margin: '16px 0',
            minHeight: 'calc(100% - 282px)',
            display: 'flex',
            background: '#d9d9d9'
        },
        topMenu: {
            style: {
                flexGrow: 0,
                height: 'auto',
                border: 'none',
                backgroundColor: 'transparent',
                alignSelf: 'flex-end',
                cursor: 'pointer'
            },
            itemStyle: {
                color: '#fff',
                textShadow: '0 0 15px #567ab1',
                border: 'none',
                fontSize: '40px'
            }
        },
        leftMenu: {
            containerStyle: {
                minHeight: '100%',
                overflowY: 'auto',
                overflowX: 'hidden',
                width: '300px'
            },
            background: '#2d75b6'
        }

    },
    templateStyle: {
        template1: {
            style: {
                height: 'calc(100% - 48px)',
                padding: '24px'
            },
            text: {
                width: '100%',
                fontSize: '28px',
                textAlign: 'center',
                margin: '0'
            },
            a: {
                color: '#0b76c1',
                cursor: 'pointer'
            },
            carousel: {
                height: 'calc(100% - 80px)',
                marginTop: '24px',
                width: '100% ',
                padding: '20px 0',
                boxSizing: 'border-box'
            },
            carouselItem: {
                height: '100%'
            }
        },
        template2: {
            style: {
                height: 'calc(100% - 48px)',
                padding: '24px'
            },
            itemStyle: {
                marginBottom: '24px'
            },
            blank: {
                display: 'block'
            },
            text: {
                style: {
                }
            },
            bigBoldText: {
                style: {
                    fontSize: '28px',
                    fontWeight: 'bold'
                }
            },
            boldText: {
                style: {
                    fontSize: '16px',
                    fontWeight: 'bold'
                }
            },
            imgAndText: {
                style: {
                    display: 'flex',
                    marginBottom: '24px',
                    textAlign: 'center'
                },
                itemStyle: {
                    marginRight: '50px'
                },
                imgStyle: {
                    width: '150px',
                    height: 'auto'
                },
                textStyle: {
                    fontWeight: 'bold',
                    marginTop: '8px'
                }
            },
            group: {
                style: {
                    display: 'flex'
                }
            },
            line: {
                style: {
                    height: '2px',
                    width: '100%',
                    background: 'black',
                    display: 'block'
                }
            }
        }
    },
    footer: {
        style: {
            background: '#2d75b6',
            height: '50px',
            lineHeight: '50px',
            textAlign: 'center',
            fontSize: '28px',
            color: '#fff'
        },
        text: 'Manfred Metal Cutting GmbH  •  72622 Nürtingen/Germany  •  info@manfred-tools.com  •  Copyright © 2019 - Manfred, . All Rights Reserved'
    }
}
