import { ChainId, WBNB, ERC20Token } from '@pancakeswap/sdk'
import { BUSD_CMPTESTNET, LINE_TESTNET } from './common'

export const testnetTokens = {
  weth: WBNB[ChainId.LINEA_TESTNET],
  line: LINE_TESTNET,
  syrup: new ERC20Token(
    ChainId.LINEA_TESTNET,
    '0xbDda3DC688cF63C3cA7C76d2432A3b6B636c9ca0',
    18,
    'Syrup',
    'SyrupBar Token',
    'https://Lineswap.Exchange',
  ),
  usdt: new ERC20Token(
    ChainId.LINEA_TESTNET,
    '0x275a59C1E7710857DD165FDd693eEddc95Fffbae',
    18,
    'USDT',
    'Testnet USD',
    'https://lineswap.exchange',
  ),
}
