window.staticConfig = {
    header: {
        style: {
            backgroundImage: 'url(./img/header-bg.png)',
            padding: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        logo: {
            src: './img/logo.png',
            style: {
                width: 'auto',
                height: 'auto'
            }
        },
    },
    content: [
        {
            name: 'Startseite',
            imgs: []
        },
        {
            name: 'Produkte',
            children: [
                {
                    name: 'Drehwerkzeuge',
                }
            ]
        },
        {
            name: 'Service'
        },
        {
            name: 'Karriere'
        },
        {
            name: 'Kontakt'
        }
    ],
    footer: {
        style: {
            background: '#f00',
            height: '50px',
            lineHeight: '50px'
        },
        text: 'Manfred Metal Cutting GmbH  •  72622 Nürtingen/Germany  •  info@manfred-tools.com  •  Copyright © 2019 - Manfred, . All Rights Reserved'
    }
}
