﻿// ---- Enums ----

var cv_consts = {

    CV_8U: 0,
    CV_8S: 1,
    CV_16U: 2,
    CV_16S: 3,
    CV_32S: 4,
    CV_32F: 5,
    CV_64F: 6,
    CV_USRTYPE1: 7,

    CV_8UC1: 0,
    CV_8UC2: 8,
    CV_8UC3: 16,
    CV_8UC4: 24,

    CV_8SC1: 1,
    CV_8SC2: 9,
    CV_8SC3: 17,
    CV_8SC4: 25,

    CV_16UC1: 2,
    CV_16UC2: 10,
    CV_16UC3: 18,
    CV_16UC4: 26,

    CV_16SC1: 3,
    CV_16SC2: 11,
    CV_16SC3: 19,
    CV_16SC4: 27,

    CV_32SC1: 4,
    CV_32SC2: 12,
    CV_32SC3: 20,
    CV_32SC4: 28,

    CV_32FC1: 5,
    CV_32FC2: 13,
    CV_32FC3: 21,
    CV_32FC4: 29,

    CV_64FC1: 6,
    CV_64FC2: 14,
    CV_64FC3: 22,
    CV_64FC4: 30,

    CV_BGR2BGRA: 0,
    CV_RGB2RGBA: 0,
    CV_BGRA2BGR: 1,
    CV_RGBA2RGB: 1,
    CV_BGR2RGBA: 2,
    CV_RGB2BGRA: 2,
    CV_RGBA2BGR: 3,
    CV_BGRA2RGB: 3,
    CV_BGR2RGB: 4,
    CV_RGB2BGR: 4,
    CV_BGRA2RGBA: 5,
    CV_RGBA2BGRA: 5,
    CV_BGR2GRAY: 6,
    CV_RGB2GRAY: 7,
    CV_GRAY2BGR: 8,
    CV_GRAY2RGB: 8,
    CV_GRAY2BGRA: 9,
    CV_GRAY2RGBA: 9,
    CV_BGRA2GRAY: 10,
    CV_RGBA2GRAY: 11,
    CV_BGR2BGR565: 12,
    CV_RGB2BGR565: 13,
    CV_BGR5652BGR: 14,
    CV_BGR5652RGB: 15,
    CV_BGRA2BGR565: 16,
    CV_RGBA2BGR565: 17,
    CV_BGR5652BGRA: 18,
    CV_BGR5652RGBA: 19,
    CV_GRAY2BGR565: 20,
    CV_BGR5652GRAY: 21,
    CV_BGR2BGR555: 22,
    CV_RGB2BGR555: 23,
    CV_BGR5552BGR: 24,
    CV_BGR5552RGB: 25,
    CV_BGRA2BGR555: 26,
    CV_RGBA2BGR555: 27,
    CV_BGR5552BGRA: 28,
    CV_BGR5552RGBA: 29,
    CV_GRAY2BGR555: 30,
    CV_BGR5552GRAY: 31,
    CV_BGR2XYZ: 32,
    CV_RGB2XYZ: 33,
    CV_XYZ2BGR: 34,
    CV_XYZ2RGB: 35,
    CV_BGR2YCrCb: 36,
    CV_RGB2YCrCb: 37,
    CV_YCrCb2BGR: 38,
    CV_YCrCb2RGB: 39,
    CV_BGR2HSV: 40,
    CV_RGB2HSV: 41,
    CV_BGR2Lab: 44,
    CV_RGB2Lab: 45,
    CV_BayerBG2BGR: 46,
    CV_BayerGB2BGR: 47,
    CV_BayerRG2BGR: 48,
    CV_BayerGR2BGR: 49,
    CV_BayerBG2RGB: 48,
    CV_BayerGB2RGB: 49,
    CV_BayerRG2RGB: 46,
    CV_BayerGR2RGB: 47,
    CV_BGR2Luv: 50,
    CV_RGB2Luv: 51,
    CV_BGR2HLS: 52,
    CV_RGB2HLS: 53,
    CV_HSV2BGR: 54,
    CV_HSV2RGB: 55,
    CV_Lab2BGR: 56,
    CV_Lab2RGB: 57,
    CV_Luv2BGR: 58,
    CV_Luv2RGB: 59,
    CV_HLS2BGR: 60,
    CV_HLS2RGB: 61,
    CV_BayerBG2BGR_VNG: 62,
    CV_BayerGB2BGR_VNG: 63,
    CV_BayerRG2BGR_VNG: 64,
    CV_BayerGR2BGR_VNG: 65,
    CV_BayerBG2RGB_VNG: 64,
    CV_BayerGB2RGB_VNG: 65,
    CV_BayerRG2RGB_VNG: 62,
    CV_BayerGR2RGB_VNG: 63,
    CV_BGR2HSV_FULL: 66,
    CV_RGB2HSV_FULL: 67,
    CV_BGR2HLS_FULL: 68,
    CV_RGB2HLS_FULL: 69,
    CV_HSV2BGR_FULL: 70,
    CV_HSV2RGB_FULL: 71,
    CV_HLS2BGR_FULL: 72,
    CV_HLS2RGB_FULL: 73,
    CV_LBGR2Lab: 74,
    CV_LRGB2Lab: 75,
    CV_LBGR2Luv: 76,
    CV_LRGB2Luv: 77,
    CV_Lab2LBGR: 78,
    CV_Lab2LRGB: 79,
    CV_Luv2LBGR: 80,
    CV_Luv2LRGB: 81,
    CV_BGR2YUV: 82,
    CV_RGB2YUV: 83,
    CV_YUV2BGR: 84,
    CV_YUV2RGB: 85,

    THRESH_BINARY: 0,
    THRESH_BINARY_INV: 1,
    THRESH_TRUNC: 2,
    THRESH_TOZERO: 3,
    THRESH_TOZERO_INV: 4,
    THRESH_MASK: 7,
    THRESH_OTSU: 8,

    CV_COVAR_SCRAMBLED: 0,
    CV_COVAR_NORMAL: 1,
    CV_COVAR_USE_AVG: 2,
    CV_COVAR_SCALE: 4,
    CV_COVAR_ROWS: 8,
    CV_COVAR_COLS: 16,

    DECOMP_LU: 0,
    DECOMP_SVD: 1,
    DECOMP_EIG: 2,
    DECOMP_CHOLESKY: 3,
    DECOMP_QR: 4,
    DECOMP_NORMAL: 16,

    NORM_INF: 1,
    NORM_L1: 2,
    NORM_L2: 4,
    NORM_TYPE_MASK: 7,
    NORM_RELATIVE: 8,
    NORM_MINMAX: 32,

    CMP_EQ: 0,
    CMP_GT: 1,
    CMP_GE: 2,
    CMP_LT: 3,
    CMP_LE: 4,
    CMP_NE: 5,

    GEMM_1_T: 1,
    GEMM_2_T: 2,
    GEMM_3_T: 4,

    DFT_INVERSE: 1,
    DFT_SCALE: 2,
    DFT_ROWS: 4,
    DFT_COMPLEX_OUTPUT: 16,
    DFT_REAL_OUTPUT: 32,
    DCT_INVERSE: 1,
    DCT_ROWS: 4,

    CV_THRESH_BINARY: 0,
    CV_THRESH_BINARY_INV: 1,
    CV_THRESH_TRUNC: 2,
    CV_THRESH_TOZERO: 3,
    CV_THRESH_TOZERO_INV: 4,
    CV_THRESH_MASK: 7,
    CV_THRESH_OTSU: 8,

    CV_EVENT_MOUSEMOVE: 0,
    CV_EVENT_LBUTTONDOWN: 1,
    CV_EVENT_RBUTTONDOWN: 2,
    CV_EVENT_MBUTTONDOWN: 3,
    CV_EVENT_LBUTTONUP: 4,
    CV_EVENT_RBUTTONUP: 5,
    CV_EVENT_MBUTTONUP: 6,
    CV_EVENT_LBUTTONDBLCLK: 7,
    CV_EVENT_RBUTTONDBLCLK: 8,
    CV_EVENT_MBUTTONDBLCLK: 9,

    CV_EVENT_FLAG_LBUTTON: 1,
    CV_EVENT_FLAG_RBUTTON: 2,
    CV_EVENT_FLAG_MBUTTON: 4,
    CV_EVENT_FLAG_CTRLKEY: 8,
    CV_EVENT_FLAG_SHIFTKEY: 16,
    CV_EVENT_FLAG_ALTKEY: 32,

    CV_INTER_NN: 0,
    CV_INTER_LINEAR: 1,
    CV_INTER_CUBIC: 2,
    CV_INTER_AREA: 3,
    CV_INTER_LANCZOS4: 4,

    CV_WARP_FILL_OUTLIERS: 8,
    CV_WARP_INVERSE_MAP: 16,

    CV_SHAPE_RECT: 0,
    CV_SHAPE_CROSS: 1,
    CV_SHAPE_ELLIPSE: 2,
    CV_SHAPE_CUSTOM: 100,

    CV_MOP_ERODE: 0,
    CV_MOP_DILATE: 1,
    CV_MOP_OPEN: 2,
    CV_MOP_CLOSE: 3,
    CV_MOP_GRADIENT: 4,
    CV_MOP_TOPHAT: 5,
    CV_MOP_BLACKHAT: 6,

    CV_TM_SQDIFF: 0,
    CV_TM_SQDIFF_NORMED: 1,
    CV_TM_CCORR: 2,
    CV_TM_CCORR_NORMED: 3,
    CV_TM_CCOEFF: 4,
    CV_TM_CCOEFF_NORMED: 5,

    CV_RETR_EXTERNAL: 0,
    CV_RETR_LIST: 1,
    CV_RETR_CCOMP: 2,
    CV_RETR_TREE: 3,

    CV_CHAIN_CODE: 0,
    CV_CHAIN_APPROX_NONE: 1,
    CV_CHAIN_APPROX_SIMPLE: 2,
    CV_CHAIN_APPROX_TC89_L1: 3,
    CV_CHAIN_APPROX_TC89_KCOS: 4,
    CV_LINK_RUNS: 5,

    CV_PTLOC_ERROR: -2,
    CV_PTLOC_OUTSIDE_RECT: -1,
    CV_PTLOC_INSIDE: 0,
    CV_PTLOC_VERTEX: 1,
    CV_PTLOC_ON_EDGE: 2,

    CV_NEXT_AROUND_ORG: 0,
    CV_NEXT_AROUND_DST: 34,
    CV_PREV_AROUND_ORG: 17,
    CV_PREV_AROUND_DST: 51,
    CV_NEXT_AROUND_LEFT: 19,
    CV_NEXT_AROUND_RIGHT: 49,
    CV_PREV_AROUND_LEFT: 32,
    CV_PREV_AROUND_RIGHT: 2,

    CV_POLY_APPROX_DP: 0,

    CV_CONTOURS_MATCH_I1: 1,
    CV_CONTOURS_MATCH_I2: 2,
    CV_CONTOURS_MATCH_I3: 3,

    CV_CLOCKWISE: 1,
    CV_COUNTER_CLOCKWISE: 2,

    CV_COMP_CORREL: 0,
    CV_COMP_CHISQR: 1,
    CV_COMP_INTERSECT: 2,
    CV_COMP_BHATTACHARYYA: 3,

    CV_DIST_MASK_3: 3,
    CV_DIST_MASK_5: 5,
    CV_DIST_MASK_PRECISE: 0,

    CV_DIST_USER: -1,
    CV_DIST_L1: 1,
    CV_DIST_L2: 2,
    CV_DIST_C: 3,
    CV_DIST_L12: 4,
    CV_DIST_FAIR: 5,
    CV_DIST_WELSCH: 6,
    CV_DIST_HUBER: 7,

    CV_ADAPTIVE_THRESH_MEAN_C: 0,
    CV_ADAPTIVE_THRESH_GAUSSIAN_C: 1,

    CV_FLOODFILL_FIXED_RANGE: 65536,
    CV_FLOODFILL_MASK_ONLY: 131072,

    CV_CANNY_L2_GRADIENT: -2147483648,

    CV_HOUGH_PROBABILISTIC: 1,
    CV_HOUGH_STANDARD: 0,
    CV_HOUGH_MULTI_SCALE: 2,
    CV_HOUGH_GRADIENT: 3,

    CV_BLUR_NO_SCALE: 0,
    CV_BLUR: 1,
    CV_GAUSSIAN: 2,
    CV_MEDIAN: 3,
    CV_BILATERAL: 4,

    CV_GAUSSIAN_5x5: 7,

    CV_SCHARR: -1,
    CV_MAX_SOBEL_KSIZE: 7,

    FONT_HERSHEY_SIMPLEX: 0,
    FONT_HERSHEY_PLAIN: 1,
    FONT_HERSHEY_DUPLEX: 2,
    FONT_HERSHEY_COMPLEX: 3,
    FONT_HERSHEY_TRIPLEX: 4,
    FONT_HERSHEY_COMPLEX_SMALL: 5,
    FONT_HERSHEY_SCRIPT_SIMPLEX: 6,
    FONT_HERSHEY_SCRIPT_COMPLEX: 7,
    FONT_ITALIC: 16,

    CV_FILLED: -1,

    LOAD_IMAGE_GRAYSCALE: 0,
    LOAD_IMAGE_COLOR: 1,
    LOAD_IMAGE_UNCHANGED: -1,

    CV_WINDOW_AUTOSIZE: 1,

    CV_CAP_PROP_POS_MSEC: 0,
    CV_CAP_PROP_POS_FRAMES: 1,
    CV_CAP_PROP_FPS: 5,
    CV_CAP_PROP_FOURCC: 6,
    CV_CAP_PROP_FRAME_COUNT: 7,
    CV_CAP_PROP_FORMAT: 8,
    CV_CAP_PROP_MODE: 9

};

module.exports = cv_consts;
