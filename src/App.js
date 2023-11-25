
import './App.css';
import React, { useEffect, useState } from 'react';
import Card from './components/card';
import Title from './components/title';
import { get } from './services/data';


function App() {
  const [data, setData] = useState(get());
  const [currLayer, setCurrLayer] = useState(0);
  const [layer, setLayer] = useState(data.layer_s_1);
  const [key, setKey] = useState(0);
  const [lkey, setLkey] = useState(0);



  const receiveKey = (k, l) => {
    setCurrLayer(l);
    setKey(k);
    
  }
  
  useEffect(()=>{
    switch (currLayer){
      case 0:
        setLayer(data.layer_0);
        break;
      case 1:
        setLayer(data.layer_1);
        break;
      case 2:
        setLayer(data.layer_2);
        break;
      case 3:
        setLayer(data.layer_3);
        break;
      case 4:
        setLayer(data.layer_4);
        break;
      case 5:
        setLayer(data.layer_5);
        break;
      case 6:
        setLayer(data.layer_6);
        break;
      case 7:
        setLayer(data.layer_7);
        break;
      case 11:
        setLayer(data.layer_1_1);
        break;
      case 12:
        setLayer(data.layer_1_2);
        break;
      case 13:
        setLayer(data.layer_1_3);
        break;
      case 14:
        setLayer(data.layer_1_4);
        break;
      case 15:
        setLayer(data.layer_1_5);
        break;
      case 16:
        setLayer(data.layer_1_6);
        break;
      case 17:
        setLayer(data.layer_1_7);
        break;
      case 21:
        setLayer(data.layer_2_1);
        break;
      case 22:
        setLayer(data.layer_2_2);
        break;
      case 23:
        setLayer(data.layer_2_3);
        break;
      case 24:
        setLayer(data.layer_2_4);
        break;
      case 25:
        setLayer(data.layer_2_5);
        break;
      case 26:
        setLayer(data.layer_2_6);
        break;
      case 27:
        setLayer(data.layer_2_7);
        break;
      case 31:
        setLayer(data.layer_3_1);
        break;
      case 32:
        setLayer(data.layer_3_2);
        break;
      case 33:
        setLayer(data.layer_3_3);
        break;
      case 34:
        setLayer(data.layer_3_4);
        break;
      case 35:
        setLayer(data.layer_3_5);
        break;
      case 36:
        setLayer(data.layer_3_6);
        break;
      case 37:
        setLayer(data.layer_3_7);
        break;
      case 41:
        setLayer(data.layer_4_1);
        break;
      case 42:
        setLayer(data.layer_4_2);
        break;
      case 43:
        setLayer(data.layer_4_3);
        break;
      case 44:
        setLayer(data.layer_4_4);
        break;
      case 45:
        setLayer(data.layer_4_5);
        break;
      case 46:
        setLayer(data.layer_4_6);
        break;
      case 47:
        setLayer(data.layer_4_7);
        break;
      case 51:
        setLayer(data.layer_5_1);
        break;
      case 52:
        setLayer(data.layer_5_2);
        break;
      case 53:
        setLayer(data.layer_5_3);
        break;
      case 54:
        setLayer(data.layer_5_4);
        break;
      case 55:
        setLayer(data.layer_5_5);
        break;
      case 56:
        setLayer(data.layer_5_6);
        break;
      case 57:
        setLayer(data.layer_5_7);
        break;
      case 61:
        setLayer(data.layer_6_1);
        break;
      case 62:
        setLayer(data.layer_6_2);
        break;
      case 63:
        setLayer(data.layer_6_3);
        break;
      case 64:
        setLayer(data.layer_6_4);
        break;
      case 65:
        setLayer(data.layer_6_5);
        break;
      case 66:
        setLayer(data.layer_6_6);
        break;
      case 67:
        setLayer(data.layer_6_7);
        break;
      case 71:
        setLayer(data.layer_7_1);
        break;
      case 72:
        setLayer(data.layer_7_2);
        break;
      case 73:
        setLayer(data.layer_7_3);
        break;
      case 74:
        setLayer(data.layer_7_4);
        break;
      case 75:
        setLayer(data.layer_7_5);
        break;
      case 76:
        setLayer(data.layer_7_6);
        break;
      case 77:
        setLayer(data.layer_7_7);
        break;
      case 111:
        setLayer(data.layer_1_1_1);
        break;
      case 112:
        setLayer(data.layer_1_1_2);
        break;
      case 113:
        setLayer(data.layer_1_1_3);
        break;
      case 114:
        setLayer(data.layer_1_1_4);
        break;
      case 115:
        setLayer(data.layer_1_1_5);
        break;
      case 116:
        setLayer(data.layer_1_1_6);
        break;
      case 117:
        setLayer(data.layer_1_1_7);
        break;
      case 121:
        setLayer(data.layer_1_2_1);
        break;
      case 122:
        setLayer(data.layer_1_2_2);
        break;
      case 123:
        setLayer(data.layer_1_2_3);
        break;
      case 124:
        setLayer(data.layer_1_2_4);
        break;
      case 125:
        setLayer(data.layer_1_2_5);
        break;
      case 126:
        setLayer(data.layer_1_2_6);
        break;
      case 127:
        setLayer(data.layer_1_2_7);
        break;
      case 131:
        setLayer(data.layer_1_3_1);
        break;
      case 132:
        setLayer(data.layer_1_3_2);
        break;
      case 133:
        setLayer(data.layer_1_3_3);
        break;
      case 134:
        setLayer(data.layer_1_3_4);
        break;
      case 135:
        setLayer(data.layer_1_3_5);
        break;
      case 136:
        setLayer(data.layer_1_3_6);
        break;
      case 137:
        setLayer(data.layer_1_3_7);
        break;
      case 141:
        setLayer(data.layer_1_4_1);
        break;
      case 142:
        setLayer(data.layer_1_4_2);
        break;
      case 143:
        setLayer(data.layer_1_4_3);
        break;
      case 144:
        setLayer(data.layer_1_4_4);
        break;
      case 145:
        setLayer(data.layer_1_4_5);
        break;
      case 146:
        setLayer(data.layer_1_4_6);
        break;
      case 147:
        setLayer(data.layer_1_4_7);
        break;
      case 151:
        setLayer(data.layer_1_5_1);
        break;
      case 152:
        setLayer(data.layer_1_5_2);
        break;
      case 153:
        setLayer(data.layer_1_5_3);
        break;
      case 154:
        setLayer(data.layer_1_5_4);
        break;
      case 155:
        setLayer(data.layer_1_5_5);
        break;
      case 156:
        setLayer(data.layer_1_5_6);
        break;
      case 157:
        setLayer(data.layer_1_5_7);
        break;
      case 161:
        setLayer(data.layer_1_6_1);
        break;
      case 162:
        setLayer(data.layer_1_6_2);
        break;
      case 163:
        setLayer(data.layer_1_6_3);
        break;
      case 164:
        setLayer(data.layer_1_6_4);
        break;
      case 165:
        setLayer(data.layer_1_6_5);
        break;
      case 166:
        setLayer(data.layer_1_6_6);
        break;
      case 167:
        setLayer(data.layer_1_6_7);
        break;
      case 171:
        setLayer(data.layer_1_7_1);
        break;
      case 172:
        setLayer(data.layer_1_7_2);
        break;
      case 173:
        setLayer(data.layer_1_7_3);
        break;
      case 174:
        setLayer(data.layer_1_7_4);
        break;
      case 175:
        setLayer(data.layer_1_7_5);
        break;
      case 176:
        setLayer(data.layer_1_7_6);
        break;
      case 177:
        setLayer(data.layer_1_7_7);
        break;
      case 211:
        setLayer(data.layer_2_1_1);
        break;
      case 212:
        setLayer(data.layer_2_1_2);
        break;
      case 213:
        setLayer(data.layer_2_1_3);
        break;
      case 214:
        setLayer(data.layer_2_1_4);
        break;
      case 215:
        setLayer(data.layer_2_1_5);
        break;
      case 216:
        setLayer(data.layer_2_1_6);
        break;
      case 217:
        setLayer(data.layer_2_1_7);
        break;
      case 221:
        setLayer(data.layer_2_2_1);
        break;
      case 222:
        setLayer(data.layer_2_2_2);
        break;
      case 223:
        setLayer(data.layer_2_2_3);
        break;
      case 224:
        setLayer(data.layer_2_2_4);
        break;
      case 225:
        setLayer(data.layer_2_2_5);
        break;
      case 226:
        setLayer(data.layer_2_2_6);
        break;
      case 227:
        setLayer(data.layer_2_2_7);
        break;
      case 231:
        setLayer(data.layer_2_3_1);
        break;
      case 232:
        setLayer(data.layer_2_3_2);
        break;
      case 233:
        setLayer(data.layer_2_3_3);
        break;
      case 234:
        setLayer(data.layer_2_3_4);
        break;
      case 235:
        setLayer(data.layer_2_3_5);
        break;
      case 236:
        setLayer(data.layer_2_3_6);
        break;
      case 237:
        setLayer(data.layer_2_3_7);
        break;
      case 241:
        setLayer(data.layer_2_4_1);
        break;
      case 242:
        setLayer(data.layer_2_4_2);
        break;
      case 243:
        setLayer(data.layer_2_4_3);
        break;
      case 244:
        setLayer(data.layer_2_4_4);
        break;
      case 245:
        setLayer(data.layer_2_4_5);
        break;
      case 246:
        setLayer(data.layer_2_4_6);
        break;
      case 247:
        setLayer(data.layer_2_4_7);
        break;
      case 251:
        setLayer(data.layer_2_5_1);
        break;
      case 252:
        setLayer(data.layer_2_5_2);
        break;
      case 253:
        setLayer(data.layer_2_5_3);
        break;
      case 254:
        setLayer(data.layer_2_5_4);
        break;
      case 255:
        setLayer(data.layer_2_5_5);
        break;
      case 256:
        setLayer(data.layer_2_5_6);
        break;
      case 257:
        setLayer(data.layer_2_5_7);
        break;
      case 261:
        setLayer(data.layer_2_6_1);
        break;
      case 262:
        setLayer(data.layer_2_6_2);
        break;
      case 263:
        setLayer(data.layer_2_6_3);
        break;
      case 264:
        setLayer(data.layer_2_6_4);
        break;
      case 265:
        setLayer(data.layer_2_6_5);
        break;
      case 266:
        setLayer(data.layer_2_6_6);
        break;
      case 267:
        setLayer(data.layer_2_6_7);
        break;
      case 271:
        setLayer(data.layer_2_7_1);
        break;
      case 272:
        setLayer(data.layer_2_7_2);
        break;
      case 273:
        setLayer(data.layer_2_7_3);
        break;
      case 274:
        setLayer(data.layer_2_7_4);
        break;
      case 275:
        setLayer(data.layer_2_7_5);
        break;
      case 276:
        setLayer(data.layer_2_7_6);
        break;
      case 277:
        setLayer(data.layer_2_7_7);
        break;
      case 311:
        setLayer(data.layer_3_1_1);
        break;
      case 312:
        setLayer(data.layer_3_1_2);
        break;
      case 313:
        setLayer(data.layer_3_1_3);
        break;
      case 314:
        setLayer(data.layer_3_1_4);
        break;
      case 315:
        setLayer(data.layer_3_1_5);
        break;
      case 316:
        setLayer(data.layer_3_1_6);
        break;
      case 317:
        setLayer(data.layer_3_1_7);
        break;
      case 321:
        setLayer(data.layer_3_2_1);
        break;
      case 322:
        setLayer(data.layer_3_2_2);
        break;
      case 323:
        setLayer(data.layer_3_2_3);
        break;
      case 324:
        setLayer(data.layer_3_2_4);
        break;
      case 325:
        setLayer(data.layer_3_2_5);
        break;
      case 326:
        setLayer(data.layer_3_2_6);
        break;
      case 327:
        setLayer(data.layer_3_2_7);
        break;
      case 331:
        setLayer(data.layer_3_3_1);
        break;
      case 332:
        setLayer(data.layer_3_3_2);
        break;
      case 333:
        setLayer(data.layer_3_3_3);
        break;
      case 334:
        setLayer(data.layer_3_3_4);
        break;
      case 335:
        setLayer(data.layer_3_3_5);
        break;
      case 336:
        setLayer(data.layer_3_3_6);
        break;
      case 337:
        setLayer(data.layer_3_3_7);
        break;
      case 341:
        setLayer(data.layer_3_4_1);
        break;
      case 342:
        setLayer(data.layer_3_4_2);
        break;
      case 343:
        setLayer(data.layer_3_4_3);
        break;
      case 344:
        setLayer(data.layer_3_4_4);
        break;
      case 345:
        setLayer(data.layer_3_4_5);
        break;
      case 346:
        setLayer(data.layer_3_4_6);
        break;
      case 347:
        setLayer(data.layer_3_4_7);
        break;
      case 351:
        setLayer(data.layer_3_5_1);
        break;
      case 352:
        setLayer(data.layer_3_5_2);
        break;
      case 353:
        setLayer(data.layer_3_5_3);
        break;
      case 354:
        setLayer(data.layer_3_5_4);
        break;
      case 355:
        setLayer(data.layer_3_5_5);
        break;
      case 356:
        setLayer(data.layer_3_5_6);
        break;
      case 357:
        setLayer(data.layer_3_5_7);
        break;
      case 361:
        setLayer(data.layer_3_6_1);
        break;
      case 362:
        setLayer(data.layer_3_6_2);
        break;
      case 363:
        setLayer(data.layer_3_6_3);
        break;
      case 364:
        setLayer(data.layer_3_6_4);
        break;
      case 365:
        setLayer(data.layer_3_6_5);
        break;
      case 366:
        setLayer(data.layer_3_6_6);
        break;
      case 367:
        setLayer(data.layer_3_6_7);
        break;
      case 371:
        setLayer(data.layer_3_1_1);
        break;
      case 372:
        setLayer(data.layer_3_1_2);
        break;
      case 373:
        setLayer(data.layer_3_1_3);
        break;
      case 374:
        setLayer(data.layer_3_1_4);
        break;
      case 375:
        setLayer(data.layer_3_1_5);
        break;
      case 376:
        setLayer(data.layer_3_1_6);
        break;
      case 377:
        setLayer(data.layer_3_1_7);
        break;
      case 411:
        setLayer(data.layer_4_1_1);
        break;
      case 412:
        setLayer(data.layer_4_1_2);
        break;
      case 413:
        setLayer(data.layer_4_1_3);
        break;
      case 414:
        setLayer(data.layer_4_1_4);
        break;
      case 415:
        setLayer(data.layer_4_1_5);
        break;
      case 416:
        setLayer(data.layer_4_1_6);
        break;
      case 417:
        setLayer(data.layer_4_1_7);
        break;
      case 421:
        setLayer(data.layer_4_2_1);
        break;
      case 422:
        setLayer(data.layer_4_2_2);
        break;
      case 423:
        setLayer(data.layer_4_2_3);
        break;
      case 424:
        setLayer(data.layer_4_2_4);
        break;
      case 425:
        setLayer(data.layer_4_2_5);
        break;
      case 426:
        setLayer(data.layer_4_2_6);
        break;
      case 427:
        setLayer(data.layer_4_2_7);
        break;
      case 431:
        setLayer(data.layer_4_3_1);
        break;
      case 432:
        setLayer(data.layer_4_3_2);
        break;
      case 433:
        setLayer(data.layer_4_3_3);
        break;
      case 434:
        setLayer(data.layer_4_3_4);
        break;
      case 435:
        setLayer(data.layer_4_3_5);
        break;
      case 436:
        setLayer(data.layer_4_3_6);
        break;
      case 437:
        setLayer(data.layer_4_3_7);
        break;
      case 441:
        setLayer(data.layer_4_4_1);
        break;
      case 442:
        setLayer(data.layer_4_4_2);
        break;
      case 443:
        setLayer(data.layer_4_4_3);
        break;
      case 444:
        setLayer(data.layer_4_4_4);
        break;
      case 445:
        setLayer(data.layer_4_4_5);
        break;
      case 446:
        setLayer(data.layer_4_4_6);
        break;
      case 447:
        setLayer(data.layer_4_4_7);
        break;
      case 451:
        setLayer(data.layer_4_5_1);
        break;
      case 452:
        setLayer(data.layer_4_5_2);
        break;
      case 453:
        setLayer(data.layer_4_5_3);
        break;
      case 454:
        setLayer(data.layer_4_5_4);
        break;
      case 455:
        setLayer(data.layer_4_5_5);
        break;
      case 456:
        setLayer(data.layer_4_5_6);
        break;
      case 457:
        setLayer(data.layer_4_5_7);
        break;
      case 461:
        setLayer(data.layer_4_6_1);
        break;
      case 462:
        setLayer(data.layer_4_6_2);
        break;
      case 463:
        setLayer(data.layer_4_6_3);
        break;
      case 464:
        setLayer(data.layer_4_6_4);
        break;
      case 465:
        setLayer(data.layer_4_6_5);
        break;
      case 466:
        setLayer(data.layer_4_6_6);
        break;
      case 467:
        setLayer(data.layer_4_6_7);
        break;
      case 471:
        setLayer(data.layer_4_7_1);
        break;
      case 472:
        setLayer(data.layer_4_7_2);
        break;
      case 473:
        setLayer(data.layer_4_7_3);
        break;
      case 474:
        setLayer(data.layer_4_7_4);
        break;
      case 475:
        setLayer(data.layer_4_7_5);
        break;
      case 476:
        setLayer(data.layer_4_7_6);
        break;
      case 477:
        setLayer(data.layer_4_7_7);
        break;
      case 511:
        setLayer(data.layer_5_1_1);
        break;
      case 512:
        setLayer(data.layer_5_1_2);
        break;
      case 513:
        setLayer(data.layer_5_1_3);
        break;
      case 514:
        setLayer(data.layer_5_1_4);
        break;
      case 515:
        setLayer(data.layer_5_1_5);
        break;
      case 516:
        setLayer(data.layer_5_1_6);
        break;
      case 517:
        setLayer(data.layer_5_1_7);
        break;
      case 521:
        setLayer(data.layer_5_2_1);
        break;
      case 522:
        setLayer(data.layer_5_2_2);
        break;
      case 523:
        setLayer(data.layer_5_2_3);
        break;
      case 524:
        setLayer(data.layer_5_2_4);
        break;
      case 525:
        setLayer(data.layer_5_2_5);
        break;
      case 526:
        setLayer(data.layer_5_2_6);
        break;
      case 527:
        setLayer(data.layer_5_2_7);
        break;
      case 531:
        setLayer(data.layer_5_3_1);
        break;
      case 532:
        setLayer(data.layer_5_3_2);
        break;
      case 533:
        setLayer(data.layer_5_3_3);
        break;
      case 534:
        setLayer(data.layer_5_3_4);
        break;
      case 535:
        setLayer(data.layer_5_3_5);
        break;
      case 536:
        setLayer(data.layer_5_3_6);
        break;
      case 537:
        setLayer(data.layer_5_3_7);
        break;
      case 541:
        setLayer(data.layer_5_4_1);
        break;
      case 542:
        setLayer(data.layer_5_4_2);
        break;
      case 543:
        setLayer(data.layer_5_4_3);
        break;
      case 544:
        setLayer(data.layer_5_4_4);
        break;
      case 545:
        setLayer(data.layer_5_4_5);
        break;
      case 546:
        setLayer(data.layer_5_4_6);
        break;
      case 547:
        setLayer(data.layer_5_4_7);
        break;
      case 551:
        setLayer(data.layer_5_5_1);
        break;
      case 552:
        setLayer(data.layer_5_5_2);
        break;
      case 553:
        setLayer(data.layer_5_5_3);
        break;
      case 554:
        setLayer(data.layer_5_5_4);
        break;
      case 555:
        setLayer(data.layer_5_5_5);
        break;
      case 556:
        setLayer(data.layer_5_5_6);
        break;
      case 557:
        setLayer(data.layer_5_5_7);
        break;
      case 561:
        setLayer(data.layer_5_6_1);
        break;
      case 562:
        setLayer(data.layer_5_6_2);
        break;
      case 563:
        setLayer(data.layer_5_6_3);
        break;
      case 564:
        setLayer(data.layer_5_6_4);
        break;
      case 565:
        setLayer(data.layer_5_6_5);
        break;
      case 566:
        setLayer(data.layer_5_6_6);
        break;
      case 567:
        setLayer(data.layer_5_6_7);
        break;
      case 571:
        setLayer(data.layer_5_7_1);
        break;
      case 572:
        setLayer(data.layer_5_7_2);
        break;
      case 573:
        setLayer(data.layer_5_7_3);
        break;
      case 574:
        setLayer(data.layer_5_7_4);
        break;
      case 575:
        setLayer(data.layer_5_7_5);
        break;
      case 576:
        setLayer(data.layer_5_7_6);
        break;
      case 577:
        setLayer(data.layer_5_7_7);
        break;
      case 611:
        setLayer(data.layer_6_1_1);
        break;
      case 612:
        setLayer(data.layer_6_1_2);
        break;
      case 613:
        setLayer(data.layer_6_1_3);
        break;
      case 614:
        setLayer(data.layer_6_1_4);
        break;
      case 615:
        setLayer(data.layer_6_1_5);
        break;
      case 616:
        setLayer(data.layer_6_1_6);
        break;
      case 617:
        setLayer(data.layer_6_1_7);
        break;
      case 621:
        setLayer(data.layer_6_2_1);
        break;
      case 622:
        setLayer(data.layer_6_2_2);
        break;
      case 623:
        setLayer(data.layer_6_2_3);
        break;
      case 624:
        setLayer(data.layer_6_2_4);
        break;
      case 625:
        setLayer(data.layer_6_2_5);
        break;
      case 626:
        setLayer(data.layer_6_2_6);
        break;
      case 627:
        setLayer(data.layer_6_2_7);
        break;
      case 631:
        setLayer(data.layer_6_3_1);
        break;
      case 632:
        setLayer(data.layer_6_3_2);
        break;
      case 633:
        setLayer(data.layer_6_3_3);
        break;
      case 634:
        setLayer(data.layer_6_3_4);
        break;
      case 635:
        setLayer(data.layer_6_3_5);
        break;
      case 636:
        setLayer(data.layer_6_3_6);
        break;
      case 637:
        setLayer(data.layer_6_3_7);
        break;
      case 641:
        setLayer(data.layer_6_4_1);
        break;
      case 642:
        setLayer(data.layer_6_4_2);
        break;
      case 643:
        setLayer(data.layer_6_4_3);
        break;
      case 644:
        setLayer(data.layer_6_4_4);
        break;
      case 645:
        setLayer(data.layer_6_4_5);
        break;
      case 646:
        setLayer(data.layer_6_4_6);
        break;
      case 647:
        setLayer(data.layer_6_4_7);
        break;
      case 651:
        setLayer(data.layer_6_5_1);
        break;
      case 652:
        setLayer(data.layer_6_5_2);
        break;
      case 653:
        setLayer(data.layer_6_5_3);
        break;
      case 654:
        setLayer(data.layer_6_5_4);
        break;
      case 655:
        setLayer(data.layer_6_5_5);
        break;
      case 656:
        setLayer(data.layer_6_5_6);
        break;
      case 657:
        setLayer(data.layer_6_5_7);
        break;
      case 661:
        setLayer(data.layer_6_6_1);
        break;
      case 662:
        setLayer(data.layer_6_6_2);
        break;
      case 663:
        setLayer(data.layer_6_6_3);
        break;
      case 664:
        setLayer(data.layer_6_6_4);
        break;
      case 665:
        setLayer(data.layer_6_6_5);
        break;
      case 667:
        setLayer(data.layer_6_6_7);
        break;
      case 671:
        setLayer(data.layer_6_7_1);
        break;
      case 672:
        setLayer(data.layer_6_7_2);
        break;
      case 673:
        setLayer(data.layer_6_7_3);
        break;
      case 674:
        setLayer(data.layer_6_7_4);
        break;
      case 675:
        setLayer(data.layer_6_7_5);
        break;
      case 676:
        setLayer(data.layer_6_7_6);
        break;
      case 677:
        setLayer(data.layer_6_7_7);
        break;
      case 711:
        setLayer(data.layer_7_1_1);
        break;
      case 712:
        setLayer(data.layer_7_1_2);
        break;
      case 713:
        setLayer(data.layer_7_1_3);
        break;
      case 714:
        setLayer(data.layer_7_1_4);
        break;
      case 715:
        setLayer(data.layer_7_1_5);
        break;
      case 716:
        setLayer(data.layer_7_1_6);
        break;
      case 717:
        setLayer(data.layer_7_1_7);
        break;
      case 721:
        setLayer(data.layer_7_2_1);
        break;
      case 722:
        setLayer(data.layer_7_2_2);
        break;
      case 723:
        setLayer(data.layer_7_2_3);
        break;
      case 724:
        setLayer(data.layer_7_2_4);
        break;
      case 725:
        setLayer(data.layer_7_2_5);
        break;
      case 726:
        setLayer(data.layer_7_2_6);
        break;
      case 727:
        setLayer(data.layer_7_2_7);
        break;
      case 731:
        setLayer(data.layer_7_3_1);
        break;
      case 732:
        setLayer(data.layer_7_3_2);
        break;
      case 733:
        setLayer(data.layer_7_3_3);
        break;
      case 734:
        setLayer(data.layer_7_3_4);
        break;
      case 735:
        setLayer(data.layer_7_3_5);
        break;
      case 736:
        setLayer(data.layer_7_3_6);
        break;
      case 737:
        setLayer(data.layer_7_3_7);
        break;
      case 741:
        setLayer(data.layer_7_4_1);
        break;
      case 742:
        setLayer(data.layer_7_4_2);
        break;
      case 743:
        setLayer(data.layer_7_4_3);
        break;
      case 744:
        setLayer(data.layer_7_4_4);
        break;
      case 745:
        setLayer(data.layer_7_4_5);
        break;
      case 746:
        setLayer(data.layer_7_4_6);
        break;
      case 747:
        setLayer(data.layer_7_4_7);
        break;
      case 751:
        setLayer(data.layer_7_5_1);
        break;
      case 752:
        setLayer(data.layer_7_5_2);
        break;
      case 753:
        setLayer(data.layer_7_5_3);
        break;
      case 754:
        setLayer(data.layer_7_5_4);
        break;
      case 755:
        setLayer(data.layer_7_5_5);
        break;
      case 756:
        setLayer(data.layer_7_5_6);
        break;
      case 757:
        setLayer(data.layer_7_5_7);
        break;
      case 761:
        setLayer(data.layer_7_6_1);
        break;
      case 762:
        setLayer(data.layer_7_6_2);
        break;
      case 763:
        setLayer(data.layer_7_6_3);
        break;
      case 764:
        setLayer(data.layer_7_6_4);
        break;
      case 765:
        setLayer(data.layer_7_6_5);
        break;
      case 766:
        setLayer(data.layer_7_6_6);
        break;
      case 767:
        setLayer(data.layer_7_6_7);
        break;
      case 771:
        setLayer(data.layer_7_7_1);
        break;
      case 772:
        setLayer(data.layer_7_7_2);
        break;
      case 773:
        setLayer(data.layer_7_7_3);
        break;
      case 774:
        setLayer(data.layer_7_7_4);
        break;
      case 775:
        setLayer(data.layer_7_7_5);
        break;
      case 776:
        setLayer(data.layer_7_7_6);
        break;
      case 777:
        setLayer(data.layer_7_7_7);
        break;
      case 666:
        setLayer(data.layer_game_over);
        break;
      case 1000:
        setLayer(data.layer_s_1);
        break;
      case 2000:
        setLayer(data.layer_s_2);
        break;
      case 3000:
        setLayer(data.layer_s_3);
        break;
      case 4000:
        setLayer(data.layer_s_4);
        break;
      case 5000:  
        setLayer(data.layer_s_5);
        break;
      default:
        break;
    }
  },[currLayer] )

  useEffect(() => {
    console.log("camada",currLayer)
  }, [layer])

  useEffect(() => {
    console.log("Chave",key)
  }, [key])
  
  return (
    <>
      <div className="App">
        <Title/>
      <Card
        layer = {layer}
        index = {key}
        sendKey = {receiveKey}
      />
  

        

      </div>
    </>
  );
}

export default App;
