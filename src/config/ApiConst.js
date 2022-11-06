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
        GET_WORD_BY_ID: '/api/v1/word/get-word-by-id',

        SAVE_WORD: '/api/v1/word/save-word',
        SAVE_WORD_MEAN: '/api/v1/word/save-word-mean-popularity',
        SAVE_ENG_WORD_MEAN: '/api/v1/word/save-eng-word-mean',
        SAVE_VIE_WORD_MEAN_BY_TYPE_WORD: '/api/v1/word/save-vie-word-mean-by-type-word',
        SAVE_ENG_WORD_MEAN_BY_TYPE_WORD: '/api/v1/word/save-eng-word-mean-by-type-word',
        SAVE_EXAMPLE: '/api/v1/word/save-example',

        ADD_OR_UPDATE_EXAMPLE_TO_VIE_WORD_MEAN_BY_TYPE_WORD: '/api/v1/word/save-example-to-vie-word-mean-by-type-word',
        ADD_OR_UPDATE_EXAMPLE_TO_ENG_WORD_MEAN_BY_TYPE_WORD: '/api/v1/word/save-example-to-eng-word-mean-by-type-word',
        DELETE_EXAMPLE_OF_VIE_WORD_MEAN_BY_TYPE_WORD: '/api/v1/word/delete-example-of-vie-word-mean-by-type-word',
        DELETE_EXAMPLE_OF_ENG_WORD_MEAN_BY_TYPE_WORD: '/api/v1/word/delete-example-of-eng-word-mean-by-type-word',

        UPDATE_VIE_WORD_MEAN_BY_TYPE_WORD: '/api/v1/word/update-vie-word-mean-by-type-word',
        DELETE_VIE_WORD_MEAN_BY_TYPE_WORD: '/api/v1/word/delete-vie-word-mean-by-type-word',
        UPDATE_ENG_WORD_MEAN_BY_TYPE_WORD: '/api/v1/word/update-eng-word-mean-by-type-word',
        DELETE_ENG_WORD_MEAN_BY_TYPE_WORD: '/api/v1/word/delete-eng-word-mean-by-type-word',

        UPDATE_WORD: '/api/v1/word/update-word'
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