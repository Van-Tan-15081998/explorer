export const ApiConst = {

    GET_DATA: '/api/v1/get-data',

    PRODUCT: {
        GET_ALL_PRODUCT: '/api/v1/product/get-all-product',
        GET_PRODUCT_BY_ID: '/api/v1/product/get-product',
        ADD: '',
        UPDATE: '',
        DELETE_PRODUCT_BY_ID: '/api/v1/product/delete-product',
    },

    BLOG: {
        GET_ALL_BLOG: '/api/v1/blog/get-all-blog',
        GET_BLOG_BY_ID: '/api/v1/blog/get-blog',
        ADD: '',
        UPDATE: '',
        DELETE_BLOG_BY_ID: '/api/v1/blog/delete-blog',
    },

    WORD: {
        GET_WORD_PAGINATE: '/api/v1/word/get-word-paginate',
        GET_TYPE_WORD: '/api/v1/word/get-type-word',

        SAVE_WORD: '/api/v1/word/save-word',
        SAVE_WORD_MEAN: '/api/v1/word/save-word-mean-popularity',
        SAVE_ENG_WORD_MEAN: '/api/v1/word/save-eng-word-mean',
        SAVE_VIE_WORD_MEAN_BY_TYPE_WORD: '/api/v1/word/save-vie-word-mean-by-type-word',
        SAVE_ENG_WORD_MEAN_BY_TYPE_WORD: '/api/v1/word/save-eng-word-mean-by-type-word',
        SAVE_EXAMPLE: '/api/v1/word/save-example',
    },

    PRONOUNCE: {
        GET_PRONOUNCE: '/api/v1/pronounce/get-pronounce',
        SAVE_PRONOUNCE: '/api/v1/pronounce/save-pronounce',
    },

    WORD_MEAN: {
        GET_WORD_MEAN: '/api/v1/word-mean/get-word-mean',
        SAVE_WORD_MEAN: '/api/v1/word-mean/save-word-mean',
    },

    USER: {
        LOGIN: '',
        LOGOUT: '',
        UPDATE: '',
    }
}