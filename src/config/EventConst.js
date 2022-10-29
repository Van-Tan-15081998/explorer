export const EventConst = {
    API: {
        GET_DATA: 'Get data',
        GET_DATA_SUCCESS: 'Get data success',
        GET_DATA_ERROR: 'Get data error',

        PRODUCT: {
            GET_ALL_PRODUCT: 'Get all product',
            GET_ALL_PRODUCT_SUCCESS : 'Get all product success',
            GET_ALL_PRODUCT_ERROR : 'Get all product error',

            GET_PRODUCT_BY_ID: 'Get product by id',
            GET_PRODUCT_BY_ID_SUCCESS : 'Get product by id success',
            GET_PRODUCT_BY_ID_ERROR : 'Get product by id error',

            DELETE_PRODUCT_BY_ID: 'Delete product by id',
            DELETE_PRODUCT_BY_ID_SUCCESS : 'Delete product by id success',
            DELETE_PRODUCT_BY_ID_ERROR : 'Delete product by id error',
        },
        BLOG: {
            GET_ALL_BLOG: 'Get all blog',
            GET_ALL_BLOG_SUCCESS : 'Get all blog success',
            GET_ALL_BLOG_ERROR : 'Get all blog error',

            GET_BLOG_BY_ID: 'Get blog by id',
            GET_BLOG_BY_ID_SUCCESS : 'Get blog by id success',
            GET_BLOG_BY_ID_ERROR : 'Get blog by id error',

            DELETE_BLOG_BY_ID: 'Delete blog by id',
            DELETE_BLOG_BY_ID_SUCCESS : 'Delete blog by id success',
            DELETE_BLOG_BY_ID_ERROR : 'Delete blog by id error',
        },

        WORD: {
            GET_WORD_PAGINATE: 'Get word paginate',
            GET_WORD_PAGINATE_SUCCESS: 'Get word paginate success',
            GET_WORD_PAGINATE_ERROR: 'Get word paginate error',

            GET_WORD_BY_ID: 'Get word by id',
            GET_WORD_BY_ID_SUCCESS: 'Get word by id success',
            GET_WORD_BY_ID_ERROR: 'Get word by id error',

            GET_TYPE_WORD: 'Get type word',
            GET_TYPE_WORD_SUCCESS: 'Get type word success',
            GET_TYPE_WORD_ERROR: 'Get type word error',

            SAVE_WORD: 'Save word',
            SAVE_WORD_SUCCESS: 'Save word success',
            SAVE_WORD_ERROR: 'Save word error',

            SAVE_WORD_MEAN: 'Save word mean',
            SAVE_WORD_MEAN_SUCCESS: 'Save word mean success',
            SAVE_WORD_MEAN_ERROR: 'Save word mean error',

            SAVE_ENG_WORD_MEAN: 'Save eng word mean',
            SAVE_ENG_WORD_MEAN_SUCCESS: 'Save eng word mean success',
            SAVE_ENG_WORD_MEAN_ERROR: 'Save eng word mean error',

            SAVE_VIE_WORD_MEAN_BY_TYPE_WORD: 'Save vie word mean by type word',
            SAVE_VIE_WORD_MEAN_BY_TYPE_WORD_SUCCESS: 'Save vie word mean by type word success',
            SAVE_VIE_WORD_MEAN_BY_TYPE_WORD_ERROR: 'Save vie word mean by type word error',

            SAVE_ENG_WORD_MEAN_BY_TYPE_WORD: 'Save eng word mean by type word',
            SAVE_ENG_WORD_MEAN_BY_TYPE_WORD_SUCCESS: 'Save eng word mean by type word success',
            SAVE_ENG_WORD_MEAN_BY_TYPE_WORD_ERROR: 'Save eng word mean by type word error',

            SAVE_EXAMPLE: 'Save example',
            SAVE_EXAMPLE_SUCCESS: 'Save example success',
            SAVE_EXAMPLE_ERROR: 'Save example error',

            ADD_OR_UPDATE_EXAMPLE_TO_VIE_WORD_MEAN_BY_TYPE_WORD: 'Add or update example to vie word mean by type word',
            ADD_OR_UPDATE_EXAMPLE_TO_VIE_WORD_MEAN_BY_TYPE_WORD_SUCCESS: 'Add or update example to vie word mean by type word success',
            ADD_OR_UPDATE_EXAMPLE_TO_VIE_WORD_MEAN_BY_TYPE_WORD_ERROR: 'Add or update example to vie word mean by type word error',

            DELETE_EXAMPLE_OF_VIE_WORD_MEAN_BY_TYPE_WORD: 'Delete example of vie word mean by type word',
            DELETE_EXAMPLE_OF_VIE_WORD_MEAN_BY_TYPE_WORD_SUCCESS: 'Delete example of vie word mean by type word success',
            DELETE_EXAMPLE_OF_VIE_WORD_MEAN_BY_TYPE_WORD_ERROR: 'Delete example of vie word mean by type word error',

            ADD_OR_UPDATE_EXAMPLE_TO_ENG_WORD_MEAN_BY_TYPE_WORD: 'Add or update example to eng word mean by type word',
            ADD_OR_UPDATE_EXAMPLE_TO_ENG_WORD_MEAN_BY_TYPE_WORD_SUCCESS: 'Add or update example to eng word mean by type word success',
            ADD_OR_UPDATE_EXAMPLE_TO_ENG_WORD_MEAN_BY_TYPE_WORD_ERROR: 'Add or update example to eng word mean by type word error',

            DELETE_EXAMPLE_OF_ENG_WORD_MEAN_BY_TYPE_WORD: 'Delete example of eng word mean by type word',
            DELETE_EXAMPLE_OF_ENG_WORD_MEAN_BY_TYPE_WORD_SUCCESS: 'Delete example of eng word mean by type word success',
            DELETE_EXAMPLE_OF_ENG_WORD_MEAN_BY_TYPE_WORD_ERROR: 'Delete example of eng word mean by type word error',

            UPDATE_VIE_WORD_MEAN_BY_TYPE_WORD: 'Update vie word mean by type word',
            UPDATE_VIE_WORD_MEAN_BY_TYPE_WORD_SUCCESS: 'Update vie word mean by type word success',
            UPDATE_VIE_WORD_MEAN_BY_TYPE_WORD_ERROR: 'Update vie word mean by type word error',

            DELETE_VIE_WORD_MEAN_BY_TYPE_WORD: 'Delete vie word mean by type word',
            DELETE_VIE_WORD_MEAN_BY_TYPE_WORD_SUCCESS: 'Delete vie word mean by type word success',
            DELETE_VIE_WORD_MEAN_BY_TYPE_WORD_ERROR: 'Delete vie word mean by type word error',

            UPDATE_ENG_WORD_MEAN_BY_TYPE_WORD: 'Update eng word mean by type word',
            UPDATE_ENG_WORD_MEAN_BY_TYPE_WORD_SUCCESS: 'Update eng word mean by type word success',
            UPDATE_ENG_WORD_MEAN_BY_TYPE_WORD_ERROR: 'Update eng word mean by type word error',

            DELETE_ENG_WORD_MEAN_BY_TYPE_WORD: 'Delete eng word mean by type word',
            DELETE_ENG_WORD_MEAN_BY_TYPE_WORD_SUCCESS: 'Delete eng word mean by type word success',
            DELETE_ENG_WORD_MEAN_BY_TYPE_WORD_ERROR: 'Delete eng word mean by type word error',

        },

        PRONOUNCE: {
            GET_PRONOUNCE: 'Get pronounce',
            GET_PRONOUNCE_SUCCESS: 'Get pronounce success',
            GET_PRONOUNCE_ERROR: 'Get pronounce error',

            SAVE_PRONOUNCE: 'Save pronounce',
            SAVE_PRONOUNCE_SUCCESS: 'Save pronounce success',
            SAVE_PRONOUNCE_ERROR: 'Save pronounce error',
        },

        WORD_MEAN: {
            GET_WORD_MEAN: 'Get word mean',
            GET_WORD_MEAN_SUCCESS: 'Get word mean success',
            GET_WORD_MEAN_ERROR: 'Get word mean error',

            SAVE_WORD_MEAN: 'Save word mean',
            SAVE_WORD_MEAN_SUCCESS: 'Save word mean success',
            SAVE_WORD_MEAN_ERROR: 'Save word mean error',
        }
        
    },

    MODAL: {
        WORD: {
            OPEN_MODAL_UPDATE_WORD: 'Open modal update word',
            CLOSE_MODAL_UPDATE_WORD: 'Close modal update word',

            OPEN_MODAL_ADD_WORD: 'Open modal add word',
            CLOSE_MODAL_ADD_WORD: 'Close modal add word'
        }
    },

    PASS_DATA: {
        PRODUCT: {
            CONFIRM_DELETE_PRODUCT: 'Confirm delete product',
        },
        WORD: {
            UPDATE_WORD: 'Update word'
        }
    },

    COMMON: {
        CHANGE_CONTENT_SCREEN: 'Change content screen',
    },

    NOTIFICATION: {
        OPEN_NOTIFICATION: 'Open notification',
        CLOSE_NOTIFICATION: 'Close notification',
    },

    SYNC: {
        STATUS_CONNECT_SOCKET_SERVER: 'sync:status_connect_socket_server',
    }

}