import { DOWN, UP } from './constants/constants.js';
import BridgeRandomNumberGenerator from './utils/BridgeRandomNumberGenerator.js';

/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for (let count = 0; count < size; count++) {
      const randomNumber = generateRandomNumber();
      if (randomNumber === BridgeRandomNumberGenerator.RANDOM_LOWER_INCLUSIVE) bridge.push(DOWN);
      if (randomNumber === BridgeRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE) bridge.push(UP);
    }
    return bridge;
  },
};

export default BridgeMaker;
