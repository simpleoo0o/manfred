window.staticConfig = {
    // 头部
    header: {
        style: {
            backgroundImage: 'url(./img/header-bg.png)',
            backgroundSize: '100% 100%',
            padding: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '152px',
        },
        logo: {
            src: './img/logo.png',
            style: {
                width: 'auto',
                height: 'auto'
            }
        }
    },
    // 主体
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
                template: 'template1', // 首页用template1，其他用template2
                text: [
                    'Bei uns finden Sie preiswerte Werkzeuge für die Metallbearbeitung!',
                    'zum aktuellen '
                ],
                aText: 'Angebot',
                aHrefPath: ['Produkte', 'Drehwerkzeuge']

            },
            {
                name: 'Produkte', // 二级菜单写在children里面
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
                                type: 'group',
                                settings: [
                                    {
                                        type: 'hyperlink',
                                        hyperlink: 'http://www.google.com',
                                        content: {
                                            type: 'imgAndText',
                                            img: './img/1.png',
                                            text: 'Drehen_Stähle'
                                        }
                                    },
                                    {
                                        type: 'imgAndText',
                                        img: './img/1.png',
                                        text: 'Drehen_Edelstähle'
                                    },
                                    {
                                        type: 'imgAndText',
                                        img: './img/1.png',
                                        text: 'Drehen_Grauguss'
                                    }
                                ]
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
                                            marginLeft: '20px'
                                        }
                                    },
                                    {
                                        type: 'text',
                                        text: '(Alle Preise in Euro zzgl. MwSt.)',
                                        style: {
                                            marginTop: '10px',
                                            marginLeft: '16px'
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
                                type: 'bigBoldText',
                                text: 'CNMG 12 04 08 - PM  MC4025',
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
                                            marginLeft: '40px'
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
                                    }
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
                                            marginLeft: '40px'
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
                                    }
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
                                            marginLeft: '80px'
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
                                style: {}
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
                                    marginLeft: '20px'
                                }
                            }
                        ]
                    },
                    {
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
                                style: {}
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
                            }
                        ]
                    },
                    {
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
                                style: {}
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
                            }
                        ]
                    },
                    {
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
                                style: {}
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
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Service',
                children: [
                    {
                        name: 'Deutschland',
                        template: 'template2',
                        content: [
                            {
                                type: 'custom',
                                html: '<div>自定义的HTML<span style="color: #0b76c1;font-size: 20px;">样例</span></div>'
                            },
                            {
                                type: 'custom',
                                html: '<a href="https://www.baidu.com/img/dong_24ac35d79990cac4c1816710e2802ca0.gif" target="_blank">demo</a>'
                            }
                        ]
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
            display: 'flex',
            background: '#d9d9d9',
            boxSizing: 'border-box'
        },
        // 头部导航的样式，导航根据上面的data自动生成
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
                fontSize: '24px' // 修改头部导航字体大小
            }
        },
        // 左侧导航的样式，导航根据上面的data自动生成
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
    // 模板样式
    templateStyle: {
        // 模板1的样式
        template1: {
            style: {
                height: '100%',
                padding: '24px 0 0',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box'
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
                height: '100%',
                width: '100% ',
                padding: '44px 0 0 0',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
            },
            carouselItem: {
                height: '100%'
            }
        },
        // 模板2的样式
        template2: {
            style: {
                height: '100%',
                padding: '24px',
                boxSizing: 'border-box'
            },
            itemStyle: {
                marginBottom: '24px'
            },
            blank: {
                display: 'block'
            },
            text: {
                style: {}
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
            },
            hyperlink: {
                display: 'block',
                cursor: 'pointer'
            },
            custom: {}
        }
    },
    // 底部
    footer: {
        style: {
            background: '#2d75b6',
            height: '50px',
            lineHeight: '50px',
            textAlign: 'center',
            fontSize: '18px', // 修改底部字体大小
            color: '#fff'
        },
        text: 'Manfred Metal Cutting GmbH  •  72622 Nürtingen/Germany  •  info@manfred-tools.com  •  Copyright © 2019 - Manfred, . All Rights Reserved'
    }
}
