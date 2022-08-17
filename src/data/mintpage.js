/*
 *   暑期實習
 */
export const internProgramYear = ['109','110'];
const internProgram = {
    '109': {
        socialIcons: [
            {
                type: 'twitter',
                title:  'twitter',
                URL: 'https://www.csie.ntu.edu.tw/people/bio.php?PID=55',
            },
            {
                type: 'facebook',
                title: 'facebook',
                URL: 'https://project-style-demo.vercel.app/?fbclid=IwAR1_hLckqYD2Bx7IMu_cogRQKuxaFh38VHmPdpQPVeaNpf-EjBvbQXF-Gh8',
            },
        ],
    },
    '110': {
        socialIcons: [
            {
                type: 'instagram',
                title: 'instagram',
                URL: 'https://www.google.com/search?q=%E5%8F%AF%E4%B8%8D%E5%8F%AF&rlz=1C1CHBF_zh-TWTW904TW904&oq=%E5%8F%AF&aqs=chrome.1.69i57j0i131i433i512l3j0i433i512j69i61l3.3191j0j7&sourceid=chrome&ie=UTF-8'
            },
            {
                type: 'website',
                title: 'myweb',
                URL: 'https://www.google.com/search?q=%E9%8C%A8%E9%BB%9E%E9%BB%9E%E6%93%8A%E8%B7%B3%E8%BD%89+react&rlz=1C1CHBF_zh-TWTW904TW904&oq=&aqs=chrome.7.35i39i362l8.58884j0j7&sourceid=chrome&ie=UTF-8',
            }
        ]
    }
}

/*
 *   校友會
 */

export const alumniAssociationYear = [109,110];

export const alumniAssociation = {
    '109': {
        socialIcons: [
            {
                type: 'twitter',
                title:  'twitter',
                URL: 'https://www.csie.ntu.edu.tw/people/bio.php?PID=55',
            },
            {
                type: 'facebook',
                title: 'facebook',
                URL: 'https://project-style-demo.vercel.app/?fbclid=IwAR1_hLckqYD2Bx7IMu_cogRQKuxaFh38VHmPdpQPVeaNpf-EjBvbQXF-Gh8',
            },
        ],
    },
    '110': {
        socialIcons: [
            {
                type: 'instagram',
                title: 'instagram',
                URL: 'https://www.google.com/search?q=%E5%8F%AF%E4%B8%8D%E5%8F%AF&rlz=1C1CHBF_zh-TWTW904TW904&oq=%E5%8F%AF&aqs=chrome.1.69i57j0i131i433i512l3j0i433i512j69i61l3.3191j0j7&sourceid=chrome&ie=UTF-8'
            },
            {
                type: 'website',
                title: 'myweb',
                URL: 'https://www.google.com/search?q=%E9%8C%A8%E9%BB%9E%E9%BB%9E%E6%93%8A%E8%B7%B3%E8%BD%89+react&rlz=1C1CHBF_zh-TWTW904TW904&oq=&aqs=chrome.7.35i39i362l8.58884j0j7&sourceid=chrome&ie=UTF-8',
            }
        ]
    }
}

/*
 *   大學部專題
 */

export const undergratesProjectYear = ['108','110'];

export const undergratesProject = {
    '108': {
        socialIcons: [
            {
                type: 'line',
                title:  'line',
                URL: 'https://www.csie.ntu.edu.tw/people/bio.php?PID=55',
            },
            {
                type: 'telegram',
                title: 'telegram',
                URL: 'https://project-style-demo.vercel.app/?fbclid=IwAR1_hLckqYD2Bx7IMu_cogRQKuxaFh38VHmPdpQPVeaNpf-EjBvbQXF-Gh8',
            },
        ],
    },
    '110': {
        socialIcons: [
            {
                type: 'facebook',
                title: 'instagram',
                URL: 'https://www.google.com/search?q=%E5%8F%AF%E4%B8%8D%E5%8F%AF&rlz=1C1CHBF_zh-TWTW904TW904&oq=%E5%8F%AF&aqs=chrome.1.69i57j0i131i433i512l3j0i433i512j69i61l3.3191j0j7&sourceid=chrome&ie=UTF-8'
            },
            {
                type: 'website',
                title: 'myweb',
                URL: 'https://www.google.com/search?q=%E9%8C%A8%E9%BB%9E%E9%BB%9E%E6%93%8A%E8%B7%B3%E8%BD%89+react&rlz=1C1CHBF_zh-TWTW904TW904&oq=&aqs=chrome.7.35i39i362l8.58884j0j7&sourceid=chrome&ie=UTF-8',
            }
        ]
    }
}

export const allType = [
    'internProgram',
    'alumniAssociation',
    'undergratesProject',
]

export const allProgram = {
    'internProgram': {
        title: '暑期實習',
        year: internProgramYear,
        description: internProgram,
    },
    'alumniAssociation': {
        title: '校友會',
        year: alumniAssociationYear,
        description: alumniAssociation,
    },
    'undergratesProject': {
        title: '大學專題',
        year: undergratesProjectYear,
        description: undergratesProject
    }
}

