/*
 *   暑期實習
 */
<<<<<<< HEAD

=======
export const internProgramYear = ['111','112'];

>>>>>>> 2bb3dfdd3996c9f661d930d7213151dd9c333dac
const internProgram = {
    '111': {
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
                type: 'instagram',
                title: 'Inatagram',
                URL: 'https://www.instagram.com/cae_internship_program/',
            },
        ],
    },
    
    '112': {
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
                type: 'instagram',
                title: 'Inatagram',
                URL: 'https://www.instagram.com/cae_internship_program/',
            },
        ]
    }
}

/*
 *   校友會
 */

export const alumniAssociationYear = [111,112];

<<<<<<< HEAD
export const alumniAssociation = {
    '111': {
=======
const alumniAssociation = {
    '109': {
>>>>>>> 2bb3dfdd3996c9f661d930d7213151dd9c333dac
        socialIcons: [
            {
                type: 'CAECE',
                title:  'CAECE',
                URL: 'https://www.caece.net/',
            },
            {
                type: 'website',
                title: 'Website',
                URL: 'https://alumni.ntuce.tw/',
            },
        ],
    },
    '112': {
        socialIcons: [
            {
                type: 'CAECE',
                title:  'CAECE',
                URL: 'https://www.caece.net/',
            },
            {
                type: 'website',
                title: 'Website',
                URL: 'https://alumni.ntuce.tw/',
            },
        ]
    }
}

/*
 *   大學部專題
 */

export const undergratesProjectYear = ['111','112'];

<<<<<<< HEAD
export const undergratesProject = {
    '111': {
=======
const undergratesProject = {
    '109': {
>>>>>>> 2bb3dfdd3996c9f661d930d7213151dd9c333dac
        socialIcons: [
            {
                type: 'CAECE',
                title:  'CAECE',
                URL: 'https://www.caece.net/',
            },
            {
                type: 'website',
                title: 'Website',
                URL: '',
            },
        ],
    },
    '112': {
        socialIcons: [
            {
                type: 'CAECE',
                title:  'CAECE',
                URL: 'https://www.caece.net/',
            },
            {
                type: 'website',
                title: 'Website',
                URL: '',
            },
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
        //contract: interProgramContract,
    },
    'alumniAssociation': {
        title: '校友會',
        year: alumniAssociationYear,
        description: alumniAssociation,
        //contract: alumniAssociationContract,
    },
    'undergratesProject': {
        title: '大學專題',
        year: undergratesProjectYear,
        description: undergratesProject,
        //contract: undergratesProjectContract,
    }
}

