'use strict';

const basePx = 375

export default function px2dp(px) {
    return px *  SCREEN_WIDTH / basePx
}
