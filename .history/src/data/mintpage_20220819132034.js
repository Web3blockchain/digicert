/*
 *   暑期實習
 */
export const internProgramYear = ['109','110'];
const internProgram = {
    '109': {
        socialIcons: [
            {
                type: 'CAECE',
                title:  'CAECE',
                URL: 'https://www.caece.net/',
            },
            {
                type: 'website',
                title:  'Website',
                URL: 'https://www.internship.caece.net',
            },
            {
                type: 'facebook',
                title: 'Facebook',
                URL: 'https://www.facebook.com/CAEinternship/',
            },
            {
                type: 'facebook',
                title: 'Facebook',
                URL: 'https://www.instagram.com/cae_internship_program/',
            },
        ],
    },
    
    '110': {
        socialIcons: [
            {
                type: 'website',
                title: 'Internship',
                URL: 'https://www.internship.caece.net'
            },
            {
                type: 'facebook',
                title: 'facebook',
                URL: 'https://www.facebook.com/CAEinternship/',
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
                type: 'discord',
                title:  'Discord',
                URL: 'https://discord.gg/k9pjSt7y4C/',
            },
            {
                type: 'website',
                title: 'Alumni',
                URL: 'https://alumni.ntuce.tw/',
            },
        ],
    },
    '110': {
        socialIcons: [
            {
                type: 'discord',
                title: 'Discord',
                URL: 'https://discord.gg/k9pjSt7y4C/'
            },
            {
                type: 'website',
                title: 'Alumni',
                URL: 'https://alumni.ntuce.tw/',
            }
        ]
    }
}

/*
 *   大學部專題
 */

export const undergratesProjectYear = ['109','110'];

export const undergratesProject = {
    '109': {
        socialIcons: [
            {
                type: 'website',
                title:  'NTUCE',
                URL: 'https://www.ce.ntu.edu.tw',
            },
            {
                type: 'website',
                title: 'CAECE',
                URL: 'https://www.caece.net',
            },
        ],
    },
    '110': {
        socialIcons: [
            {
                type: 'website',
                title: 'NTUCE',
                URL: 'https://www.ce.ntu.edu.tw'
            },
            {
                type: 'website',
                title: 'CAECE',
                URL: 'https://www.caece.net',
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

