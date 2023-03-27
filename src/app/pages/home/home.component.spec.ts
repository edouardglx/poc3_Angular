import { render, screen, fireEvent } from '@testing-library/angular';
import { HomeComponent } from './home.component';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { CardComponent } from '../../components/card/card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import '@testing-library/jest-dom';
import '@testing-library/user-event';

const MOCK_API = [
  {
    _id: '5114',
    title: 'Fullmetal Alchemist: Brotherhood',
    alternativeTitles: [
      'Hagane no Renkinjutsushi: Fullmetal Alchemist',
      'Fullmetal Alchemist (2009)',
      'FMA',
      'FMAB',
      '鋼の錬金術師 FULLMETAL ALCHEMIST',
      'Fullmetal Alchemist: Brotherhood',
      'Fullmetal Alchemist Brotherhood',
    ],
    ranking: 1,
    genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
    episodes: 64,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1208/94745.jpg',
    link: 'https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood',
    status: 'Finished Airing',
    synopsis:
      'After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse\'s body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse\'s soul in the physical realm by binding it to a hulking suit of armor.\n\nThe brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing "automail," a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher\'s Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange.\n\nAs Edward becomes an infamous alchemist and gains the nickname "Fullmetal," the boys\' journey embroils them in a growing conspiracy that threatens the fate of the world.\n\n[Written by MAL Rewrite]',
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1208/94745.jpg?s=7892d01b6c74f1bf945f7a3ff3bb1f6a',
    type: 'TV',
  },
  {
    _id: '41467',
    title: 'Bleach: Sennen Kessen-hen',
    alternativeTitles: [
      'Bleach: Thousand-Year Blood War Arc',
      'BLEACH 千年血戦篇',
      'Bleach: Thousand-Year Blood War',
    ],
    ranking: 2,
    genres: ['Action', 'Adventure', 'Fantasy'],
    episodes: 0,
    hasEpisode: false,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1764/126627.jpg',
    link: 'https://myanimelist.net/anime/41467/Bleach__Sennen_Kessen-hen',
    status: 'Not yet aired',
    synopsis: '',
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1764/126627.jpg?s=196ea098ac1becd97fc0a4b50a949c2b',
    type: 'TV',
  },
  {
    _id: '9253',
    title: 'Steins;Gate',
    alternativeTitles: ['STEINS;GATE', 'Steins;Gate'],
    ranking: 3,
    genres: ['Drama', 'Sci-Fi', 'Suspense'],
    episodes: 24,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1935/127974.jpg',
    link: 'https://myanimelist.net/anime/9253/Steins_Gate',
    status: 'Finished Airing',
    synopsis:
      'Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Rintarou founds the Future Gadget Laboratory in the hopes of creating technological innovations that baffle the human psyche. Despite claims of grandeur, the only notable "gadget" the trio have created is a microwave that has the mystifying power to turn bananas into green goo.\n\nHowever, when Rintarou decides to attend neuroscientist Kurisu Makise\'s conference on time travel, he experiences a series of strange events that lead him to believe that there is more to the "Phone Microwave" gadget than meets the eye. Apparently able to send text messages into the past using the microwave, Rintarou dabbles further with the "time machine," attracting the ire and attention of the mysterious organization SERN.\n\nDue to the novel discovery, Rintarou and his friends find themselves in an ever-present danger. As he works to mitigate the damage his invention has caused to the timeline, he is not only fighting a battle to save his loved ones, but also one against his degrading sanity.\n\n[Written by MAL Rewrite]',
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1935/127974.jpg?s=cd8506e6d26bad48a78aa985477a55ca',
    type: 'TV',
  },
  {
    _id: '28977',
    title: 'Gintama°',
    alternativeTitles: [
      "Gintama' (2015)",
      '銀魂°',
      'Gintama Season 4',
      'Gintama Season 4',
      'Gintama Temporada 4',
      'Gintama Saison 4',
    ],
    ranking: 4,
    genres: ['Action', 'Comedy', 'Sci-Fi'],
    episodes: 51,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/3/72078.jpg',
    link: 'https://myanimelist.net/anime/28977/Gintama%C2%B0',
    status: 'Finished Airing',
    synopsis:
      "Gintoki, Shinpachi, and Kagura return as the fun-loving but broke members of the Yorozuya team! Living in an alternate-reality Edo, where swords are prohibited and alien overlords have conquered Japan, they try to thrive on doing whatever work they can get their hands on. However, Shinpachi and Kagura still haven't been paid... Does Gin-chan really spend all that cash playing pachinko?\n\nMeanwhile, when Gintoki drunkenly staggers home one night, an alien spaceship crashes nearby. A fatally injured crew member emerges from the ship and gives Gintoki a strange, clock-shaped device, warning him that it is incredibly powerful and must be safeguarded. Mistaking it for his alarm clock, Gintoki proceeds to smash the device the next morning and suddenly discovers that the world outside his apartment has come to a standstill. With Kagura and Shinpachi at his side, he sets off to get the device fixed; though, as usual, nothing is ever that simple for the Yorozuya team.\n\nFilled with tongue-in-cheek humor and moments of heartfelt emotion, Gintama's fourth season finds Gintoki and his friends facing both their most hilarious misadventures and most dangerous crises yet.\n\n[Written by MAL Rewrite]",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/3/72078.jpg?s=e9537ac90c08758594c787ede117f209',
    type: 'TV',
  },
  {
    _id: '43608',
    title: 'Kaguya-sama wa Kokurasetai: Ultra Romantic',
    alternativeTitles: [
      'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen 3rd Season',
      'Kaguya-sama: Love is War Season 3rd Season',
      'かぐや様は告らせたい-ウルトラロマンティック-',
      'Kaguya-sama: Love is War - Ultra Romantic',
    ],
    ranking: 5,
    genres: ['Comedy', 'Suspense'],
    episodes: 13,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1160/122627.jpg',
    link: 'https://myanimelist.net/anime/43608/Kaguya-sama_wa_Kokurasetai__Ultra_Romantic',
    status: 'Finished Airing',
    synopsis:
      "The elite members of Shuchiin Academy's student council continue their competitive day-to-day antics. Council president Miyuki Shirogane clashes daily against vice-president Kaguya Shinomiya, each fighting tooth and nail to trick the other into confessing their romantic love. Kaguya struggles within the strict confines of her wealthy, uptight family, rebelling against her cold default demeanor as she warms to Shirogane and the rest of her friends.\n\nMeanwhile, council treasurer Yuu Ishigami suffers under the weight of his hopeless crush on Tsubame Koyasu, a popular upperclassman who helps to instill a new confidence in him. Miko Iino, the newest student council member, grows closer to the rule-breaking Ishigami while striving to overcome her own authoritarian moral code.\n\nAs love further blooms at Shuchiin Academy, the student council officers drag their outsider friends into increasingly comedic conflicts.\n\n[Written by MAL Rewrite]\n",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1160/122627.jpg?s=9b41450e9598d10c97fb4eeb7cca3737',
    type: 'TV',
  },
  {
    _id: '38524',
    title: 'Shingeki no Kyojin Season 3 Part 2',
    alternativeTitles: [
      '進撃の巨人 Season3 Part.2',
      'Attack on Titan Season 3 Part 2',
      'Attack on Titan Staffel 3 Teil 2',
      'Ataque a los Titanes Temporada 3 Parte 2',
      "L'Attaque des Titans Saison 3 Partie 2",
    ],
    ranking: 6,
    genres: ['Action', 'Drama'],
    episodes: 10,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1517/100633.jpg',
    link: 'https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season_3_Part_2',
    status: 'Finished Airing',
    synopsis:
      "Seeking to restore humanity's diminishing hope, the Survey Corps embark on a mission to retake Wall Maria, where the battle against the merciless \"Titans\" takes the stage once again.\n\nReturning to the tattered Shiganshina District that was once his home, Eren Yeager and the Corps find the town oddly unoccupied by Titans. Even after the outer gate is plugged, they strangely encounter no opposition. The mission progresses smoothly until Armin Arlert, highly suspicious of the enemy's absence, discovers distressing signs of a potential scheme against them. \n\nShingeki no Kyojin Season 3 Part 2 follows Eren as he vows to take back everything that was once his. Alongside him, the Survey Corps strive—through countless sacrifices—to carve a path towards victory and uncover the secrets locked away in the Yeager family's basement.\n\n[Written by MAL Rewrite]",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1517/100633.jpg?s=4540a01b5883647ade494cd28392f100',
    type: 'TV',
  },
  {
    _id: '39486',
    title: 'Gintama: The Final',
    alternativeTitles: ['銀魂 THE FINAL', 'Gintama: The Very Final', 'N/A'],
    ranking: 7,
    genres: ['Action', 'Comedy', 'Drama', 'Sci-Fi'],
    episodes: 1,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1988/113791.jpg',
    link: 'https://myanimelist.net/anime/39486/Gintama__The_Final',
    status: 'Finished Airing',
    synopsis:
      "Two years have passed following the Tendoshuu's invasion of the O-Edo Central Terminal. Since then, the Yorozuya have gone their separate ways. Foreseeing Utsuro's return, Gintoki Sakata begins surveying Earth's ley lines for traces of the other man's Altana. After an encounter with the remnants of the Tendoshuu—who continue to press on in search of immortality—Gintoki returns to Edo.\n\nLater, the regrouped Shinsengumi and Yorozuya begin an attack on the occupied Central Terminal. With the Altana harvested by the wreckage of the Tendoshuu's ship in danger of detonating, the Yorozuya and their allies fight their enemies while the safety of Edo—and the rest of the world—hangs in the balance. Fulfilling the wishes of their teacher, Shouyou Yoshida's former students unite and relive their pasts one final time in an attempt to save their futures.\n\n[Written by MAL Rewrite]\n",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1988/113791.jpg?s=e12ba155fe4a7beff571a5010d8214b2',
    type: 'Movie',
  },
  {
    _id: '9969',
    title: "Gintama'",
    alternativeTitles: [
      'Gintama (2011)',
      "銀魂'",
      'Gintama Season 2',
      'Gintama Staffel 2',
      'Gintama Temporada 2',
      'Gintama Saison 2',
    ],
    ranking: 8,
    genres: ['Action', 'Comedy', 'Sci-Fi'],
    episodes: 51,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/4/50361.jpg',
    link: 'https://myanimelist.net/anime/9969/Gintama',
    status: 'Finished Airing',
    synopsis:
      "After a one-year hiatus, Shinpachi Shimura returns to Edo, only to stumble upon a shocking surprise: Gintoki and Kagura, his fellow Yorozuya members, have become completely different characters! Fleeing from the Yorozuya headquarters in confusion, Shinpachi finds that all the denizens of Edo have undergone impossibly extreme changes, in both appearance and personality. Most unbelievably, his sister Otae has married the Shinsengumi chief and shameless stalker Isao Kondou and is pregnant with their first child.\n\nBewildered, Shinpachi agrees to join the Shinsengumi at Otae and Kondou's request and finds even more startling transformations afoot both in and out of the ranks of the the organization. However, discovering that Vice Chief Toushirou Hijikata has remained unchanged, Shinpachi and his unlikely Shinsengumi ally set out to return the city of Edo to how they remember it.\n\nWith even more dirty jokes, tongue-in-cheek parodies, and shameless references, Gintama' follows the Yorozuya team through more of their misadventures in the vibrant, alien-filled world of Edo.\n\n[Written by MAL Rewrite]\n",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/4/50361.jpg?s=b3a061db8c3d42a055d58f9df1f3dac7',
    type: 'TV',
  },
  {
    _id: '11061',
    title: 'Hunter x Hunter (2011)',
    alternativeTitles: [
      'HxH (2011)',
      'HUNTER×HUNTER（ハンター×ハンター）',
      'Hunter x Hunter',
      'Hunter x Hunter',
      'Hunter x Hunter',
      'Hunter X Hunter',
    ],
    ranking: 9,
    genres: ['Action', 'Adventure', 'Fantasy'],
    episodes: 148,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1337/99013.jpg',
    link: 'https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011',
    status: 'Finished Airing',
    synopsis:
      "Hunters devote themselves to accomplishing hazardous tasks, all from traversing the world's uncharted territories to locating rare items and monsters. Before becoming a Hunter, one must pass the Hunter Examination—a high-risk selection process in which most applicants end up handicapped or worse, deceased.\n\nAmbitious participants who challenge the notorious exam carry their own reason. What drives 12-year-old Gon Freecss is finding Ging, his father and a Hunter himself. Believing that he will meet his father by becoming a Hunter, Gon takes the first step to walk the same path.\n\nDuring the Hunter Examination, Gon befriends the medical student Leorio Paladiknight, the vindictive Kurapika, and ex-assassin Killua Zoldyck. While their motives vastly differ from each other, they band together for a common goal and begin to venture into a perilous world.\n\n[Written by MAL Rewrite]\n\n",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1337/99013.jpg?s=1838e905a0aa3542a009fbcf78000701',
    type: 'TV',
  },
  {
    _id: '15417',
    title: "Gintama': Enchousen",
    alternativeTitles: [
      "Gintama' (2012)",
      "Gintama' Overdrive",
      'Kintama',
      "銀魂' 延長戦",
      'Gintama: Enchousen',
    ],
    ranking: 10,
    genres: ['Action', 'Comedy', 'Sci-Fi'],
    episodes: 13,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1452/123686.jpg',
    link: 'https://myanimelist.net/anime/15417/Gintama__Enchousen',
    status: 'Finished Airing',
    synopsis:
      "While Gintoki Sakata was away, the Yorozuya found themselves a new leader: Kintoki, Gintoki's golden-haired doppelganger. In order to regain his former position, Gintoki will need the help of those around him, a troubling feat when no one can remember him! Between Kintoki and Gintoki, who will claim the throne as the main character?\n\nIn addition, Yorozuya make a trip back down to red-light district of Yoshiwara to aid an elderly courtesan in her search for her long-lost lover. Although the district is no longer in chains beneath the earth's surface, the trio soon learn of the tragic backstories of Yoshiwara's inhabitants that still haunt them. With flashback after flashback, this quest has Yorozuya witnessing everlasting love and protecting it as best they can with their hearts and souls.\n\nGintama': Enchousen includes moments of action-packed intensity along with their usual lighthearted, slapstick humor for Gintoki and his friends.\n\n[Written by MAL Rewrite]",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1452/123686.jpg?s=9691ed28cdfeb56ce6881faf2adbf01e',
    type: 'TV',
  },
  {
    _id: '820',
    title: 'Ginga Eiyuu Densetsu',
    alternativeTitles: [
      'LoGH',
      'LotGH',
      "Gin'eiden",
      'GinEiDen',
      'Heldensagen Vom Kosmosinsel',
      '銀河英雄伝説',
      'Legend of the Galactic Heroes',
      'Les Héros de la Galaxie',
    ],
    ranking: 11,
    genres: ['Drama', 'Sci-Fi'],
    episodes: 110,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/13/13225.jpg',
    link: 'https://myanimelist.net/anime/820/Ginga_Eiyuu_Densetsu',
    status: 'Finished Airing',
    synopsis:
      "The 150-year-long stalemate between the two interstellar superpowers, the Galactic Empire and the Free Planets Alliance, comes to an end when a new generation of leaders arises: the idealistic military genius Reinhard von Lohengramm, and the FPA's reserved historian, Yang Wenli.\n\nWhile Reinhard climbs the ranks of the Empire with the aid of his childhood friend, Siegfried Kircheis, he must fight not only the war, but also the remnants of the crumbling Goldenbaum Dynasty in order to free his sister from the Kaiser and unify humanity under one genuine ruler. Meanwhile, on the other side of the galaxy, Yang—a strong supporter of democratic ideals—has to stand firm in his beliefs, despite the struggles of the FPA, and show his pupil, Julian Mintz, that autocracy is not the solution.\n\nAs ideologies clash amidst the war's many casualties, the two strategic masterminds must ask themselves what the real reason behind their battle is.\n\n[Written by MAL Rewrite]",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/13/13225.jpg?s=385cedad342e284c5765833ab1cddc1c',
    type: 'OVA',
  },
  {
    _id: '42938',
    title: 'Fruits Basket: The Final',
    alternativeTitles: [
      'Fruits Basket 3rd Season',
      'Fruits Basket (2019) 3rd Season',
      'Furuba',
      'フルーツバスケット The Final',
      'Fruits Basket: The Final Season',
      'Fruits Basket Staffel 3',
      'Fruits Basket: The Final Season',
      'Fruits Basket Saison 3',
    ],
    ranking: 12,
    genres: ['Drama', 'Romance', 'Supernatural'],
    episodes: 13,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1085/114792.jpg',
    link: 'https://myanimelist.net/anime/42938/Fruits_Basket__The_Final',
    status: 'Finished Airing',
    synopsis:
      'Hundreds of years ago, the Chinese Zodiac spirits and their god swore to stay together eternally. United by this promise, the possessed members of the Souma family shall always return to each other under any circumstances. Yet, when these bonds shackle them from freedom, it becomes an undesirable burden—a curse. As head of the clan, Akito is convinced that he shares a special connection with the other Soumas. While he desperately clings to this fantasy, the rest of the family remains isolated and suppressed by the fear of punishment.\n\nTooru Honda, who has grown attached to the Soumas, is determined to break the chains that bind them. Her companionship with the family and her friends encourages her to move forward with lifting the curse. However, due to confounding revelations, she struggles to find the tenacity to continue her endeavors. With time slowly withering away, Tooru contends with an uncertain future in hopes of reaching the tranquility that may lie beyond all this commotion.\n\n[Written by MAL Rewrite]',
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1085/114792.jpg?s=bb4303c0804c9d5ca9fcb30b8f8e6783',
    type: 'TV',
  },
  {
    _id: '34096',
    title: 'Gintama.',
    alternativeTitles: ['Gintama (2017)', '銀魂。', 'Gintama Season 5'],
    ranking: 13,
    genres: ['Action', 'Comedy', 'Sci-Fi'],
    episodes: 12,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/3/83528.jpg',
    link: 'https://myanimelist.net/anime/34096/Gintama',
    status: 'Finished Airing',
    synopsis:
      "After joining the resistance against the bakufu, Gintoki and the gang are in hiding, along with Katsura and his Joui rebels. The Yorozuya is soon approached by Nobume Imai and two members of the Kiheitai, who explain that the Harusame pirates have turned against 7th Division Captain Kamui and their former ally Takasugi. The Kiheitai present Gintoki with a job: find Takasugi, who has been missing since his ship was ambushed in a Harusame raid. Nobume also makes a stunning revelation regarding the Tendoushuu, a secret organization pulling the strings of numerous factions, and their leader Utsuro, the shadowy figure with an uncanny resemblance to Gintoki's former teacher.\n\nHitching a ride on Sakamoto's space ship, the Yorozuya and Katsura set out for Rakuyou, Kagura's home planet, where the various factions have gathered and tensions are brewing. Long-held grudges, political infighting, and the Tendoushuu's sinister overarching plan finally culminate into a massive, decisive battle on Rakuyou.\n\n[Written by MAL Rewrite]",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/3/83528.jpg?s=948f092dd55fb2572f38a0e21f03b642',
    type: 'TV',
  },
  {
    _id: '52198',
    title: 'Kaguya-sama wa Kokurasetai: First Kiss wa Owaranai',
    alternativeTitles: ['かぐや様は告らせたい -ファーストキッスは終わらない-'],
    ranking: 14,
    genres: ['Comedy', 'Romance'],
    episodes: 0,
    hasEpisode: false,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1670/130060.jpg',
    link: 'https://myanimelist.net/anime/52198/Kaguya-sama_wa_Kokurasetai__First_Kiss_wa_Owaranai',
    status: 'Not yet aired',
    synopsis: 'New Kaguya-sama wa Kokurasetai anime.',
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1670/130060.jpg?s=d6b458f3a59a4c5ae4a2ee526feb690f',
    type: 'Movie',
  },
  {
    _id: '35180',
    title: '3-gatsu no Lion 2nd Season',
    alternativeTitles: [
      'Sangatsu no Lion Second Season',
      '3月のライオン 第2シリーズ',
      'March Comes In Like A Lion 2nd Season',
      'March Come in Like a Lion Staffel 2',
      'March Comes in like a Lion Temporada 2',
      'March Comes in like a Lion Saison 2',
    ],
    ranking: 15,
    genres: ['Drama', 'Slice of Life'],
    episodes: 22,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/3/88469.jpg',
    link: 'https://myanimelist.net/anime/35180/3-gatsu_no_Lion_2nd_Season',
    status: 'Finished Airing',
    synopsis:
      'Now in his second year of high school, Rei Kiriyama continues pushing through his struggles in the professional shogi world as well as his personal life. Surrounded by vibrant personalities at the shogi hall, the school club, and in the local community, his solitary shell slowly begins to crack. Among them are the three Kawamoto sisters—Akari, Hinata, and Momo—who forge an affectionate and familial bond with Rei. Through these ties, he realizes that everyone is burdened by their own emotional hardships and begins learning how to rely on others while supporting them in return. \n\nNonetheless, the life of a professional is not easy. Between tournaments, championships, and title matches, the pressure mounts as Rei advances through the ranks and encounters incredibly skilled opponents. As he manages his relationships with those who have grown close to him, the shogi player continues to search for the reason he plays the game that defines his career.\n\n[Written by MAL Rewrite]',
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/3/88469.jpg?s=becfbf556902bc3501e06a07354b9d76',
    type: 'TV',
  },
  {
    _id: '4181',
    title: 'Clannad: After Story',
    alternativeTitles: [
      'CLANNAD〜AFTER STORY〜 クラナド アフターストーリー',
      'Clannad ~After Story~',
      'Clannad ~After Story~',
      'Clannad ~After Story~',
      'Clannad ~After Story~',
    ],
    ranking: 16,
    genres: ['Drama', 'Romance', 'Supernatural'],
    episodes: 24,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1299/110774.jpg',
    link: 'https://myanimelist.net/anime/4181/Clannad__After_Story',
    status: 'Finished Airing',
    synopsis:
      "Clannad: After Story, the sequel to the critically acclaimed slice-of-life series Clannad, begins after Tomoya Okazaki and Nagisa Furukawa graduate from high school. Together, they experience the emotional rollercoaster of growing up. Unable to decide on a course for his future, Tomoya learns the value of a strong work ethic and discovers the strength of Nagisa's support. Through the couple's dedication and unity of purpose, they push forward to confront their personal problems, deepen their old relationships, and create new bonds.\n\nTime also moves on in the Illusionary World. As the plains grow cold with the approach of winter, the Illusionary Girl and the Garbage Doll are presented with a difficult situation that reveals the World's true purpose.\n\nBased on the visual novel by Key and produced by Kyoto Animation, Clannad: After Story is an impactful drama highlighting the importance of family and the struggles of adulthood.\n\n[Written by MAL Rewrite]",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1299/110774.jpg?s=fcd9db2cfd72c10a2278f483173cfff9',
    type: 'TV',
  },
  {
    _id: '918',
    title: 'Gintama',
    alternativeTitles: [
      'Gin Tama',
      'Silver Soul',
      'Yorinuki Gintama-san',
      '銀魂',
      'Gintama',
    ],
    ranking: 17,
    genres: ['Action', 'Comedy', 'Sci-Fi'],
    episodes: 201,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/10/73274.jpg',
    link: 'https://myanimelist.net/anime/918/Gintama',
    status: 'Finished Airing',
    synopsis:
      'Edo is a city that was home to the vigor and ambition of samurai across the country. However, following feudal Japan\'s surrender to powerful aliens known as the "Amanto," those aspirations now seem unachievable. With the once-influential shogunate rebuilt as a puppet government, a new law is passed that promptly prohibits all swords in public. \n\nEnter Gintoki Sakata, an eccentric silver-haired man who always carries around a wooden sword and maintains his stature as a samurai despite the ban. As the founder of Yorozuya, a small business for odd jobs, Gintoki often embarks on endeavors to help other people—though usually in rather strange and unforeseen ways. \n\nAssisted by Shinpachi Shimura, a boy with glasses supposedly learning the way of the samurai; Kagura, a tomboyish girl with superhuman strength and an endless appetite; and Sadaharu, their giant pet dog who loves biting on people\'s heads, the Yorozuya encounter anything from alien royalty to scuffles with local gangs in the ever-changing world of Edo.\n\n[Written by MAL Rewrite]',
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/10/73274.jpg?s=ed42453c10ba12b03b1600d02725a174',
    type: 'TV',
  },
  {
    _id: '28851',
    title: 'Koe no Katachi',
    alternativeTitles: [
      'The Shape of Voice',
      '聲の形',
      'A Silent Voice',
      'A Silent Voice',
      'Una Voz Silenciosa',
      'A Silent Voice',
    ],
    ranking: 18,
    genres: [],
    episodes: 1,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1122/96435.jpg',
    link: 'https://myanimelist.net/anime/28851/Koe_no_Katachi',
    status: 'Finished Airing',
    synopsis:
      "As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye.\n\nNow in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends.\n\nKoe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past.\n \n[Written by MAL Rewrite]",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1122/96435.jpg?s=56d2750d600af93a5d326daec7748cae',
    type: 'Movie',
  },
  {
    _id: '47917',
    title: 'Bocchi the Rock!',
    alternativeTitles: ['ぼっち・ざ・ろっく！', 'Bocchi the Rock!'],
    ranking: 19,
    genres: ['Comedy', 'Slice of Life'],
    episodes: 0,
    hasEpisode: false,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1448/127956.jpg',
    link: 'https://myanimelist.net/anime/47917/Bocchi_the_Rock',
    status: 'Not yet aired',
    synopsis:
      "Hitori Gotou is a high school girl who's starting to learn to play the guitar because she dreams of being in a band, but she's so shy that she hasn't made a single friend. However, her dream might come true after she meets Nijika Ijichi, a girl who plays drums and is looking for a new guitarist for her band.\n\n(Source: MU, edited)",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1448/127956.jpg?s=81e0f14a54c27c6d8046fced1a046f28',
    type: 'TV',
  },
  {
    _id: '15335',
    title: 'Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare',
    alternativeTitles: [
      'Gintama: The Final Chapter - Be Forever Yorozuya',
      'Gintama Movie 2',
      '劇場版 銀魂 完結篇 万事屋よ永遠なれ',
      'Gintama the Movie 2',
    ],
    ranking: 20,
    genres: ['Action', 'Comedy', 'Sci-Fi'],
    episodes: 1,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/10/51723.jpg',
    link: 'https://myanimelist.net/anime/15335/Gintama_Movie_2__Kanketsu-hen_-_Yorozuya_yo_Eien_Nare',
    status: 'Finished Airing',
    synopsis:
      "When Gintoki apprehends a movie pirate at a premiere, he checks the camera's footage and finds himself transported to a bleak, post-apocalyptic version of Edo, where a mysterious epidemic called the \"White Plague\" has ravished the world's population. It turns out that the movie pirate wasn't a pirate after all—it was an android time machine, and Gintoki has been hurtled five years into the future! Shinpachi and Kagura, his Yorozuya cohorts, have had a falling out and are now battle-hardened solo vigilantes and he himself has been missing for years, disappearing without a trace after scribbling a strange message in his journal.\n\nSetting out in the disguise given to him by the android time machine, Gintoki haphazardly reunites the Yorozuya team to investigate the White Plague, and soon discovers that the key to saving the future lies in the darkness of his own past. Determined to confront a powerful foe, he makes an important discovery—with a ragtag band of friends and allies at his side, he doesn't have to fight alone.\n\n[Written by MAL Rewrite]",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/10/51723.jpg?s=27cd24446486572fb64c42a689d38902',
    type: 'Movie',
  },
  {
    _id: '2904',
    title: 'Code Geass: Hangyaku no Lelouch R2',
    alternativeTitles: [
      'Code Geass: Hangyaku no Lelouch 2nd Season',
      'Code Geass: Hangyaku no Lelouch Second Season',
      'コードギアス 反逆のルルーシュ 続編',
      'Code Geass: Lelouch of the Rebellion R2',
      'Code Geass: Lelouch of the Rebellion R2',
      'Code Geass: Lelouch',
      'el de la Rebelión R2',
      'Code Geass: Lelouch of the Rebellion R2',
    ],
    ranking: 21,
    genres: ['Action', 'Drama', 'Sci-Fi'],
    episodes: 25,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/4/9391.jpg',
    link: 'https://myanimelist.net/anime/2904/Code_Geass__Hangyaku_no_Lelouch_R2',
    status: 'Finished Airing',
    synopsis:
      "One year has passed since the Black Rebellion, a failed uprising against the Holy Britannian Empire led by the masked vigilante Zero, who is now missing. At a loss without their revolutionary leader, Area 11's resistance group—the Black Knights—find themselves too powerless to combat the brutality inflicted upon the Elevens by Britannia, which has increased significantly in order to crush any hope of a future revolt. \n\nLelouch Lamperouge, having lost all memory of his double life, is living peacefully alongside his friends as a high school student at Ashford Academy. His former partner C.C., unable to accept this turn of events, takes it upon herself to remind him of his past purpose, hoping that the mastermind Zero will rise once again to finish what he started, in this thrilling conclusion to the series.\n\n[Written by MAL Rewrite]\n",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/4/9391.jpg?s=be052972605dd5422ef2df117766cff0',
    type: 'TV',
  },
  {
    _id: '37987',
    title: 'Violet Evergarden Movie',
    alternativeTitles: [
      'Gekijouban Violet Evergarden',
      '劇場版 ヴァイオレット・エヴァーガーデン',
      'Violet Evergarden the Movie',
      'Violet Evergarden: La película',
      'Violet Evergarden: Le film',
    ],
    ranking: 22,
    genres: ['Drama', 'Fantasy', 'Slice of Life'],
    episodes: 1,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1825/110716.jpg',
    link: 'https://myanimelist.net/anime/37987/Violet_Evergarden_Movie',
    status: 'Finished Airing',
    synopsis:
      'Several years have passed since the end of The Great War. As the radio tower in Leidenschaftlich continues to be built, telephones will soon become more relevant, leading to a decline in demand for "Auto Memory Dolls." Even so, Violet Evergarden continues to rise in fame after her constant success with writing letters. However, sometimes the one thing you long for is the one thing that does not appear.\n\nViolet Evergarden Movie follows Violet as she continues to comprehend the concept of emotion and the meaning of love. At the same time, she pursues a glimmer of hope that the man who once told her, "I love you," may still be alive even after the many years that have passed.\n\n[Written by MAL Rewrite]',
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1825/110716.jpg?s=3ad8359182d0b47905f28d0a68683171',
    type: 'Movie',
  },
  {
    _id: '35247',
    title: 'Owarimonogatari 2nd Season',
    alternativeTitles: [
      'End Story 2nd Season',
      '終物語',
      'Owarimonogatari Second Season',
      'Owarimonogatari Saison 2',
    ],
    ranking: 23,
    genres: ['Comedy', 'Mystery', 'Supernatural'],
    episodes: 7,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/6/87322.jpg',
    link: 'https://myanimelist.net/anime/35247/Owarimonogatari_2nd_Season',
    status: 'Finished Airing',
    synopsis:
      'Following an encounter with oddity specialist Izuko Gaen, third-year high school student Koyomi Araragi wakes up in a strange, deserted void only to be greeted by a joyfully familiar face in an alarmingly unfamiliar place.  \n\nAraragi, with the help of his girlfriend Hitagi Senjougahara, maneuvers through the webs of his past and the perplexities of the present in search of answers. However, fate once again delivers him to the eccentric transfer student Ougi Oshino, who brings forth an unexpected proposal that may unearth the very foundation to which he is anchored. As Araragi peels back the layers of mystery surrounding an apparition, he discovers a truth not meant to be revealed.\n\n[Written by MAL Rewrite]',
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/6/87322.jpg?s=3e60507a4b6016d83e7433aa4cb7853e',
    type: 'TV',
  },
  {
    _id: '37491',
    title: 'Gintama.: Shirogane no Tamashii-hen - Kouhan-sen',
    alternativeTitles: [
      'Gintama.: Silver Soul Arc 2',
      '銀魂. 銀ノ魂篇 後半戦',
      'Gintama.: Silver Soul Arc - Second Half War',
    ],
    ranking: 24,
    genres: ['Action', 'Comedy', 'Sci-Fi'],
    episodes: 14,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1776/96566.jpg',
    link: 'https://myanimelist.net/anime/37491/Gintama__Shirogane_no_Tamashii-hen_-_Kouhan-sen',
    status: 'Finished Airing',
    synopsis:
      "Following the temporary retreat of the Altana Liberation Army from the Kabuki District, the state of the war has seemingly improved. However, as the Oniwaban, Shinsengumi, and residents of the district combat the army's remnants, Edo's greatest inventor Gengai Hiraga is abducted. Responsible for causing the enemy's withdrawal by rendering their weapons useless, Gengai's nanomachine virus is now at risk of being shut down.\n\nMeanwhile, a laser capable of obliterating a planet is activated in Earth's orbit on the Liberation Army's mother ship. Another battle ensues when Shinsuke Takasugi and the rest of the Kiheitai arrive on the vessel to stop the weapon from firing. Forced to fight a war on two fronts, the Yorozuya and their allies must prevail on both sides to save Edo and the rest of the world.\n\n[Written by MAL Rewrite]\n",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1776/96566.jpg?s=e1aed468f049dd9444375e9149d33d65',
    type: 'TV',
  },
  {
    _id: '19',
    title: 'Monster',
    alternativeTitles: ['モンスター', 'Monster'],
    ranking: 25,
    genres: ['Drama', 'Mystery', 'Suspense'],
    episodes: 74,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/10/18793.jpg',
    link: 'https://myanimelist.net/anime/19/Monster',
    status: 'Finished Airing',
    synopsis:
      "Dr. Kenzou Tenma, an elite neurosurgeon recently engaged to his hospital director's daughter, is well on his way to ascending the hospital hierarchy. That is until one night, a seemingly small event changes Dr. Tenma's life forever. While preparing to perform surgery on someone, he gets a call from the hospital director telling him to switch patients and instead perform life-saving brain surgery on a famous performer. His fellow doctors, fiancée, and the hospital director applaud his accomplishment; but because of the switch, a poor immigrant worker is dead, causing Dr. Tenma to have a crisis of conscience.\n\nSo when a similar situation arises, Dr. Tenma stands his ground and chooses to perform surgery on the young boy Johan Liebert instead of the town's mayor. Unfortunately, this choice leads to serious ramifications for Dr. Tenma—losing his social standing being one of them. However, with the mysterious death of the director and two other doctors, Dr. Tenma's position is restored. With no evidence to convict him, he is released and goes on to attain the position of hospital director. \n\nNine years later when Dr. Tenma saves the life of a criminal, his past comes back to haunt him—once again, he comes face to face with the monster he operated on. He must now embark on a quest of pursuit to make amends for the havoc spread by the one he saved.\n\n[Written by MAL Rewrite]",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/10/18793.jpg?s=08c4f10a101c3835eeb14ca0715512bd',
    type: 'TV',
  },
  {
    _id: '32281',
    title: 'Kimi no Na wa.',
    alternativeTitles: [
      '君の名は。',
      'Your Name.',
      'Your Name.',
      'Your Name.',
      'Your Name.',
    ],
    ranking: 26,
    genres: ['Drama', 'Supernatural'],
    episodes: 1,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
    link: 'https://myanimelist.net/anime/32281/Kimi_no_Na_wa',
    status: 'Finished Airing',
    synopsis:
      "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.\n\nOne day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.\n\nKimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.\n\n[Written by MAL Rewrite]",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/5/87048.jpg?s=2bca128fcb9dfd6d0908f3d9986576c6',
    type: 'Movie',
  },
  {
    _id: '47778',
    title: 'Kimetsu no Yaiba: Yuukaku-hen',
    alternativeTitles: [
      '鬼滅の刃 遊郭編',
      'Demon Slayer: Kimetsu no Yaiba Entertainment District Arc',
    ],
    ranking: 27,
    genres: ['Action', 'Fantasy'],
    episodes: 11,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1908/120036.jpg',
    link: 'https://myanimelist.net/anime/47778/Kimetsu_no_Yaiba__Yuukaku-hen',
    status: 'Finished Airing',
    synopsis:
      "The devastation of the Mugen Train incident still weighs heavily on the members of the Demon Slayer Corps. Despite being given time to recover, life must go on, as the wicked never sleep: a vicious demon is terrorizing the alluring women of the Yoshiwara Entertainment District. The Sound Pillar, Tengen Uzui, and his three wives are on the case. However, when he soon loses contact with his spouses, Tengen fears the worst and enlists the help of Tanjirou Kamado, Zenitsu Agatsuma, and Inosuke Hashibira to infiltrate the district's most prominent houses and locate the depraved Upper Rank demon.\n\n[Written by MAL Rewrite]\n",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1908/120036.jpg?s=34065463bac342e6efe8bfdbed5d24de',
    type: 'TV',
  },
  {
    _id: '36838',
    title: 'Gintama.: Shirogane no Tamashii-hen',
    alternativeTitles: ['銀魂. 銀ノ魂篇', 'Gintama.: Silver Soul Arc'],
    ranking: 28,
    genres: ['Action', 'Comedy', 'Sci-Fi'],
    episodes: 12,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/12/89603.jpg',
    link: 'https://myanimelist.net/anime/36838/Gintama__Shirogane_no_Tamashii-hen',
    status: 'Finished Airing',
    synopsis:
      "After the fierce battle on Rakuyou, the untold past and true goal of the immortal Naraku leader, Utsuro, are finally revealed. By corrupting the Altana reserves of several planets, Utsuro has successfully triggered the intervention of the Tendoshuu’s greatest enemy: the Altana Liberation Army. With Earth as the main battleground in this interplanetary war, Utsuro's master plan to destroy the planet—and himself—is nearly complete. \n\nAn attack on the O-Edo Central Terminal marks the beginning of the final battle to take back the land of the samurai. With the Yorozuya nowhere in sight, the bakufu all but collapsed, and the Shogun missing, the people are left completely helpless as the Liberation Army begins pillaging Edo in the name of freeing them from the Tendoshuu's rule. \n\nCaught in the crossfire between two equally imposing forces, can Gintoki, Kagura, Shinpachi, and the former students of Shouyou Yoshida put aside their differences and unite their allies to protect what they hold dear?\n\n[Written by MAL Rewrite]",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/12/89603.jpg?s=635cb89402d5d39f43767f3942e91206',
    type: 'TV',
  },
  {
    _id: '40682',
    title: 'Kingdom 3rd Season',
    alternativeTitles: ['キングダム 第3シリーズ', 'Kingdom: Season 3'],
    ranking: 29,
    genres: [],
    episodes: 26,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1443/111830.jpg',
    link: 'https://myanimelist.net/anime/40682/Kingdom_3rd_Season',
    status: 'Finished Airing',
    synopsis:
      "Following the successful Sanyou campaign, the Qin army, including 1,000-Man Commander Xin, inches ever closer to fulfilling King Ying Zheng's dream of unifying China. With a major geographical foothold in the state of Wei now under its control, Qin sets its sights eastward toward the remaining warring states.\n\nMeanwhile Li Mu—an unparalleled strategist and the newly appointed prime minister of the state of Zhao—has taken advantage of Zhao's temporary truce with Qin to negotiate with the other states without interruption. Seemingly without warning, Ying Zheng receives news that armies from the states of Chu, Zhao, Wei, Han, Yan, and Qi have crossed into Qin territory. Realizing too late the purpose behind Li Mu's truce with Qin, Zheng quickly gathers his advisors to devise a plan to address the six-state coalition army on their doorstep. For the first time in history, the state of Qin faces complete destruction and must use every resource and strategy at their disposal to prevent themselves from being wiped off the map.\n\n[Written by MAL Rewrite]\n",
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1443/111830.jpg?s=a67f547ff56d05b36123d793df962b45',
    type: 'TV',
  },
  {
    _id: '37510',
    title: 'Mob Psycho 100 II',
    alternativeTitles: [
      'Mob Psycho 100 2nd Season',
      'Mob Psycho Hyaku',
      'Mob Psycho One Hundred',
      'モブサイコ100 II',
      'Mob Psycho 100 II',
    ],
    ranking: 30,
    genres: ['Action', 'Comedy', 'Supernatural'],
    episodes: 13,
    hasEpisode: true,
    hasRanking: true,
    image: 'https://cdn.myanimelist.net/images/anime/1918/96303.jpg',
    link: 'https://myanimelist.net/anime/37510/Mob_Psycho_100_II',
    status: 'Finished Airing',
    synopsis:
      'Shigeo "Mob" Kageyama is now maturing and understanding his role as a supernatural psychic that has the power to drastically affect the livelihood of others. He and his mentor Reigen Arataka continue to deal with supernatural requests from clients, whether it be exorcizing evil spirits or tackling urban legends that haunt the citizens.\n\nWhile the workflow remains the same, Mob isn\'t just blindly following Reigen around anymore. With all his experiences as a ridiculously strong psychic, Mob\'s supernatural adventures now have more weight to them. Things take on a serious and darker tone as the dangers Mob and Reigen face are much more tangible and unsettling than ever before.\n\n[Written by MAL Rewrite]',
    thumb:
      'https://cdn.myanimelist.net/r/50x70/images/anime/1918/96303.jpg?s=b5b51cff7ba201e4f1acf37f4f44e224',
    type: 'TV',
  },
];

describe('SearchResultsComponent', () => {
  beforeEach(async () => {
    const apiService = {
      getAnimes: jest.fn(() => of(MOCK_API)),
    };
    await render(HomeComponent, {
      componentProviders: [{ provide: ApiService, useValue: apiService }],
      declarations: [CardComponent, SearchBarComponent],
      imports: [FormsModule],
    });
  });
  test('should render search results from API', async () => {
    const element = await screen.findAllByAltText('poster');
    expect(element.length).toEqual(MOCK_API.length);
  });

  describe('When typing anime name in the search bar and clicking on the search button', () => {
    test('The wanted anime is displayed', async () => {
      const inputElem = screen.getByPlaceholderText(
        'Search'
      ) as HTMLInputElement;
      fireEvent.input(inputElem, { target: { value: 'fullmetal' } });
      const buttonSearch = screen.getByText('Search') as HTMLButtonElement;
      fireEvent.click(buttonSearch);
      const elem = await screen.findAllByAltText('poster');
      expect(elem.length).toEqual(1);
      const title = await screen.findByText('Fullmetal Alchemist: Brotherhood');
      expect(title).toBeInTheDocument();
    });
  });

  describe('When clicking on the clear button after typing something"', () => {
    test('All animes are displayed again', async () => {
      const inputElem = screen.getByPlaceholderText(
        'Search'
      ) as HTMLInputElement;
      fireEvent.input(inputElem, { target: { value: 'fullmetal' } });
      const buttonSearch = screen.getByText('Clear') as HTMLButtonElement;
      fireEvent.click(buttonSearch);
      const elem = await screen.findAllByAltText('poster');
      expect(elem.length).toEqual(30);
    });
  });
});
