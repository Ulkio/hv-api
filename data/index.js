import mongoose from "mongoose";
import fs from "fs";

const imagesNumber = fs.readdirSync("public/assets").length;

const glyphId = [];
for (const image in imagesNumber) {
  if (Object.hasOwnProperty.call(object, image)) {
    glyphId.push(new mongoose.Types.ObjectId());
  }
}
const classId = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const glyphs = [
  {
    _id: glyphId[0],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${1}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[1],
    classId: classId[4],
    valyrianTranslation: "belmon",
    englishTranslation: "chain",
    prefix: "belm",
    imagePath: `image${2}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[2],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "thing",
    prefix: "",
    imagePath: `image${3}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[3],
    classId: classId[0],
    valyrianTranslation: "muña",
    englishTranslation: "mother",
    prefix: "muñ",
    imagePath: `image${4}.png`,
    alphabet: "m",
    info: "",
    noTranslation: false,
    example: "muña zaldrīzoti",
  },
  {
    _id: glyphId[4],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${5}.png`,
    alphabet: "h",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[5],
    classId: classId[0],
    valyrianTranslation: "kāro",
    englishTranslation: "pile",
    prefix: "kār",
    imagePath: `image${6}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[6],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${7}.png`,
    alphabet: "",
    info: "-tys ?",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[7],
    classId: classId[0],
    valyrianTranslation: "drōmon",
    englishTranslation: "egg",
    prefix: "drōm",
    imagePath: `image${8}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Drōmon nektō",
  },
  {
    _id: glyphId[8],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${9}.png`,
    alphabet: "",
    info: "nominal 2lun.",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[9],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${10}.png`,
    alphabet: "g",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[10],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${11}.png`,
    alphabet: "ɟ",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[11],
    classId: classId[0],
    valyrianTranslation: "nyke",
    englishTranslation: "me",
    prefix: "",
    imagePath: `image${12}.png`,
    alphabet: "",
    info: "1st pers. pronoun",
    noTranslation: false,
    example: "Nyke Daenerys Jelmāzmo hen Targārio Lentrot, hen Valyrio Uēpo ānogār iksan",
  },
  {
    _id: glyphId[12],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${13}.png`,
    alphabet: "",
    info: "with O glyph : -vos",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[13],
    classId: classId[0],
    valyrianTranslation: "āeksion",
    englishTranslation: "gold",
    prefix: "āeksi",
    imagePath: `image${14}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Āeksio ondos",
  },
  {
    _id: glyphId[14],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${15}.png`,
    alphabet: "m",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[15],
    classId: classId[3],
    valyrianTranslation: "lōgor",
    englishTranslation: "boat",
    prefix: "lōgr",
    imagePath: `image${16}.png`,
    alphabet: "",
    info: "nominal 3aq.",
    noTranslation: false,
    example: "Lōgor ñuhi kris jenitas",
  },
  {
    _id: glyphId[16],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${17}.png`,
    alphabet: "s",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[17],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${18}.png`,
    alphabet: "a:",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[18],
    classId: classId[0],
    valyrianTranslation: "pragron",
    englishTranslation: "box",
    prefix: "pragr",
    imagePath: `image${19}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[19],
    classId: classId[5],
    valyrianTranslation: "gīda",
    englishTranslation: "equal",
    prefix: "gīd",
    imagePath: `image${20}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[20],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${21}.png`,
    alphabet: "v",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[21],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${22}.png`,
    alphabet: "d",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[22],
    classId: classId[5],
    valyrianTranslation: "rōva",
    englishTranslation: "big",
    prefix: "rōv",
    imagePath: `image${23}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "Dāro iemny rōva issa.",
  },
  {
    _id: glyphId[23],
    classId: classId[0],
    valyrianTranslation: "kost",
    englishTranslation: "able",
    prefix: "kost",
    imagePath: `image${24}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Dārys azanti jōzigon kostos daor.",
  },
  {
    _id: glyphId[24],
    classId: classId[0],
    valyrianTranslation: "aer-",
    englishTranslation: "move",
    prefix: "aer",
    imagePath: `image${25}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Aerys",
  },
  {
    _id: glyphId[25],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${26}.png`,
    alphabet: "ɟ",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[26],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${27}.png`,
    alphabet: "nn",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[27],
    classId: classId[2],
    valyrianTranslation: "drakarys",
    englishTranslation: "dragonfire",
    prefix: "drakar",
    imagePath: `image${28}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[28],
    classId: classId[0],
    valyrianTranslation: "naena",
    englishTranslation: "many",
    prefix: "naen",
    imagePath: `image${29}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Naenio jēdoti kirimvose glaesātās!",
  },
  {
    _id: glyphId[29],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${30}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[30],
    classId: classId[0],
    valyrianTranslation: "ja-",
    englishTranslation: "go",
    prefix: "ja",
    imagePath: `image${31}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[31],
    classId: classId[0],
    valyrianTranslation: "qilōny",
    englishTranslation: "whip",
    prefix: "qilōn",
    imagePath: `image${32}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Hae jeme istin. Sindity se liorty, qilonty se ozbārty, qrillaetty se vaogēdy.",
  },
  {
    _id: glyphId[32],
    classId: classId[0],
    valyrianTranslation: "giez",
    englishTranslation: "whole",
    prefix: "gier",
    imagePath: `image${33}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[33],
    classId: classId[0],
    valyrianTranslation: "vāed-",
    englishTranslation: "sing",
    prefix: "vāed",
    imagePath: `image${34}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Ziry kiviō dārilaros issa, se zȳhon suvio perzō vāedar issa.",
  },
  {
    _id: glyphId[34],
    classId: classId[0],
    valyrianTranslation: "se",
    englishTranslation: "and",
    prefix: "",
    imagePath: `image${35}.png`,
    alphabet: "",
    info: "Signifies coordination when at end of word",
    noTranslation: false,
    example: "Ziry kiviō dārilaros issa, se zȳhon suvio perzō vāedar issa.",
  },
  {
    _id: glyphId[35],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${36}.png`,
    alphabet: "",
    info: "adjectival class III",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[36],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${37}.png`,
    alphabet: "",
    info: "nominal 3lun.",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[37],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${38}.png`,
    alphabet: "tt",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[38],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${39}.png`,
    alphabet: "",
    info: "nominal 3lun. -io",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[39],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${40}.png`,
    alphabet: "",
    info: "nominal 3sol.",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[40],
    classId: classId[0],
    valyrianTranslation: "korz-",
    englishTranslation: "stretch",
    prefix: "korz",
    imagePath: `image${41}.png`,
    alphabet: "",
    info: "korze : sword (stretched iron)",
    noTranslation: false,
    example: "Iōnos Valyre korzī ēza.",
  },
  {
    _id: glyphId[41],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${42}.png`,
    alphabet: "",
    info: "nominal 1lun.",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[42],
    classId: classId[0],
    valyrianTranslation: "tolie",
    englishTranslation: "other",
    prefix: "toli",
    imagePath: `image${43}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Muñar aōt teptas lue brōzi, iā mirre tolie iderēbās.",
  },
  {
    _id: glyphId[43],
    classId: classId[0],
    valyrianTranslation: "baes",
    englishTranslation: "top",
    prefix: "baeh",
    imagePath: `image${44}.png`,
    alphabet: "",
    info: "used before verb endings to indicate -ē, -ī, -ū, -ō, -ā, -ȳ + bagon",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[44],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "magic",
    prefix: "",
    imagePath: `image${45}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[45],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${46}.png`,
    alphabet: "",
    info: "nominal 1lun. -ia",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[46],
    classId: classId[0],
    valyrianTranslation: "ziksos",
    englishTranslation: "scalp",
    prefix: "ziks",
    imagePath: `image${47}.png`,
    alphabet: "",
    info: "verbal 3rd pers. sg.",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[47],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${48}.png`,
    alphabet: "r",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[48],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${49}.png`,
    alphabet: "o:",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[49],
    classId: classId[0],
    valyrianTranslation: "mae-",
    englishTranslation: "",
    prefix: "mae",
    imagePath: `image${50}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[50],
    classId: classId[0],
    valyrianTranslation: "vala",
    englishTranslation: "man",
    prefix: "val",
    imagePath: `image${51}.png`,
    alphabet: "",
    info: "can indicate sex or gender for nouns of any class",
    noTranslation: false,
    example: "Valar gūrēñis.",
  },
  {
    _id: glyphId[51],
    classId: classId[0],
    valyrianTranslation: "drēje",
    englishTranslation: "",
    prefix: "drēj,drīv",
    imagePath: `image${52}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[52],
    classId: classId[0],
    valyrianTranslation: "arghu-",
    englishTranslation: "hunt",
    prefix: "arghu",
    imagePath: `image${53}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[53],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${54}.png`,
    alphabet: "u:",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[54],
    classId: classId[0],
    valyrianTranslation: "iōr-",
    englishTranslation: "stand",
    prefix: "iōr",
    imagePath: `image${55}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example:
      "Jehikarȳ Kinvaro iōrat, Eglio Vokto hen Rijībliot Volantīhot, Drīvo Perzo, Sylvio Ōño, Dohaeriro Ēlio Āeksiō Ōño syt.",
  },
  {
    _id: glyphId[55],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${56}.png`,
    alphabet: "n",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[56],
    classId: classId[0],
    valyrianTranslation: "pygh-",
    englishTranslation: "jump",
    prefix: "pygh",
    imagePath: `image${57}.png`,
    alphabet: "",
    info: "also used for a heart beat",
    noTranslation: false,
    example: "...rūso zȳhosy gōvilirose zijo syt pyghas lue prūmie.",
  },
  {
    _id: glyphId[57],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${58}.png`,
    alphabet: "p",
    info: "",
    noTranslation: true,
    example: "",
  },
  //   {
  //     _id: glyphId[58],
  //     classId: classId[0],
  //     valyrianTranslation: "",
  //     englishTranslation: "",
  //     prefix: "",
  //     imagePath: `image${59}.png`,
  //     alphabet: "",
  //     info: "",
  //     noTranslation: true,
  //     example: "",
  //   },
  {
    _id: glyphId[59],
    classId: classId[1],
    valyrianTranslation: "hūra",
    englishTranslation: "moon",
    prefix: "hūr",
    imagePath: `image${60}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Ñuho glaeso hūrus",
  },
  {
    _id: glyphId[60],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${61}.png`,
    alphabet: "b",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[61],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${62}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[62],
    classId: classId[0],
    valyrianTranslation: "ālion",
    englishTranslation: "area",
    prefix: "?",
    imagePath: `image${63}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  //   {
  //     _id: glyphId[63],
  //     classId: classId[0],
  //     valyrianTranslation: "",
  //     englishTranslation: "",
  //     prefix: "",
  //     imagePath: `image${64}.png`,
  //     alphabet: "",
  //     info: "",
  //     noTranslation: false,
  //     example: "",
  //   },
  {
    _id: glyphId[64],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "have",
    prefix: "",
    imagePath: `image${65}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[65],
    classId: classId[2],
    valyrianTranslation: "vēzos",
    englishTranslation: "sun",
    prefix: "vēz",
    imagePath: `image${66}.png`,
    alphabet: "",
    info: "nominal 3sol.",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[66],
    classId: classId[0],
    valyrianTranslation: "tat-",
    englishTranslation: "finish",
    prefix: "tat",
    imagePath: `image${67}.png`,
    alphabet: "",
    info: "verbal, perfect tense",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[67],
    classId: classId[0],
    valyrianTranslation: "end-",
    englishTranslation: "",
    prefix: "end",
    imagePath: `image${68}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[68],
    classId: classId[4],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${69}.png`,
    alphabet: "",
    info: "nominal 3ter.",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[69],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "heft",
    prefix: "",
    imagePath: `image${70}.png`,
    alphabet: "",
    info: "case marker",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[70],
    classId: classId[0],
    valyrianTranslation: "eleks",
    englishTranslation: "ear",
    prefix: "elek",
    imagePath: `image${71}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Muña taobe elekot ondurtas.",
  },
  {
    _id: glyphId[71],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${72}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[72],
    classId: classId[0],
    valyrianTranslation: "qana",
    englishTranslation: "sharp",
    prefix: "qan",
    imagePath: `image${73}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[73],
    classId: classId[0],
    valyrianTranslation: "udir",
    englishTranslation: "word",
    prefix: "udr",
    imagePath: `image${74}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Tīkuni Zōbrī, Udra Zōbriar",
  },
  {
    _id: glyphId[74],
    classId: classId[0],
    valyrianTranslation: "ziry",
    englishTranslation: "she/he",
    prefix: "",
    imagePath: `image${75}.png`,
    alphabet: "",
    info: "3rd pers. pronoun. lun., sol.",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[75],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${76}.png`,
    alphabet: "t",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[76],
    classId: classId[2],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${77}.png`,
    alphabet: "",
    info: "nominal 4sol.",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[77],
    classId: classId[0],
    valyrianTranslation: "tōmo",
    englishTranslation: "elderflower",
    prefix: "tōm",
    imagePath: `image${78}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[78],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${79}.png`,
    alphabet: "y:",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[79],
    classId: classId[1],
    valyrianTranslation: "naejos",
    englishTranslation: "chest",
    prefix: "naej",
    imagePath: `image${80}.png`,
    alphabet: "",
    info: "nominal 3lun.",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[80],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${81}.png`,
    alphabet: "e:",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[81],
    classId: classId[0],
    valyrianTranslation: "rāel-",
    englishTranslation: "keep",
    prefix: "rāel",
    imagePath: `image${82}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Ȳghāpī īlōn rāelza.",
  },
  {
    _id: glyphId[82],
    classId: classId[1],
    valyrianTranslation: "daomio",
    englishTranslation: "rain",
    prefix: "daomi,dav",
    imagePath: `image${83}.png`,
    alphabet: "",
    info: "nominal 3lun. -io",
    noTranslation: false,
    example: "Kastāmiro Daomior.",
  },
  {
    _id: glyphId[83],
    classId: classId[4],
    valyrianTranslation: "suvion",
    englishTranslation: "ice",
    prefix: "suvio",
    imagePath: `image${84}.png`,
    alphabet: "",
    info: "nominal 3ter. -ion",
    noTranslation: false,
    example: "Ziry kiviō dārilaros issa, se zȳhon suvio perzō vāedar issa.",
  },
  {
    _id: glyphId[84],
    classId: classId[2],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${85}.png`,
    alphabet: "",
    info: "nominal 3sol.",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[85],
    classId: classId[4],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${86}.png`,
    alphabet: "",
    info: "nominal 3ter.",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[86],
    classId: classId[0],
    valyrianTranslation: "nine",
    englishTranslation: "palm",
    prefix: "nin",
    imagePath: `image${87}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[87],
    classId: classId[1],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${88}.png`,
    alphabet: "",
    info: "nominal 5lun.",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[88],
    classId: classId[0],
    valyrianTranslation: "bōsa",
    englishTranslation: "",
    prefix: "bōs",
    imagePath: `image${89}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[89],
    classId: classId[1],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${90}.png`,
    alphabet: "",
    info: "nominal 1lun.",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[90],
    classId: classId[1],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${91}.png`,
    alphabet: "",
    info: "nominal 2lun.",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[91],
    classId: classId[0],
    valyrianTranslation: "otāp-",
    englishTranslation: "think",
    prefix: "otāp",
    imagePath: `image${92}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Skoros otāpā?",
  },
  {
    _id: glyphId[92],
    classId: classId[0],
    valyrianTranslation: "bartos",
    englishTranslation: "",
    prefix: "bart",
    imagePath: `image${93}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[93],
    classId: classId[0],
    valyrianTranslation: "sagon",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${94}.png`,
    alphabet: "",
    info: "used for infinitive verbs",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[94],
    classId: classId[4],
    valyrianTranslation: "āegion",
    englishTranslation: "iron",
    prefix: "āegi",
    imagePath: `image${95}.png`,
    alphabet: "",
    info: "nominal 3ter. -ion, substances, names",
    noTranslation: false,
    example: "Āegenkon Dēmalion.",
  },
  {
    _id: glyphId[95],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${96}.png`,
    alphabet: "l",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[96],
    classId: classId[0],
    valyrianTranslation: "prūmia",
    englishTranslation: "heart",
    prefix: "prūmi",
    imagePath: `image${97}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "..rūso zȳhosy gōvilirose zijo syt pyghas lue prūmie.",
  },
  {
    _id: glyphId[97],
    classId: classId[0],
    valyrianTranslation: "ābra",
    englishTranslation: "woman",
    prefix: "ābr",
    imagePath: `image${98}.png`,
    alphabet: "",
    info: "can indicate sex or gender for nouns of any class",
    noTranslation: false,
    example: "Ābra gerpī nektotas.",
  },
  {
    _id: glyphId[98],
    classId: classId[0],
    valyrianTranslation: "ilagon",
    englishTranslation: "",
    prefix: "il",
    imagePath: `image${99}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[99],
    classId: classId[0],
    valyrianTranslation: "kis,iprad",
    englishTranslation: "eat",
    prefix: "kis,iprad",
    imagePath: `image${100}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Anne onjapossa ipradas.",
  },
  {
    _id: glyphId[100],
    classId: classId[0],
    valyrianTranslation: "jelmio",
    englishTranslation: "wind",
    prefix: "jelm",
    imagePath: `image${101}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Lenton jelmȳssi spryjataks.",
  },
  {
    _id: glyphId[101],
    classId: classId[0],
    valyrianTranslation: "eglie",
    englishTranslation: "high",
    prefix: "egli",
    imagePath: `image${102}.png`,
    alphabet: "",
    info: "adjectival class III",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[102],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${103}.png`,
    alphabet: "r̥",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[103],
    classId: classId[0],
    valyrianTranslation: "sūmo",
    englishTranslation: "",
    prefix: "sūm",
    imagePath: `image${104}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[104],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${105}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[105],
    classId: classId[2],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${106}.png`,
    alphabet: "",
    info: "nominal 3sol.",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[106],
    classId: classId[0],
    valyrianTranslation: "litse",
    englishTranslation: "pretty",
    prefix: "lits",
    imagePath: `image${107}.png`,
    alphabet: "ts",
    info: "",
    noTranslation: false,
    example: "Gryves se Riña Litse",
  },
  {
    _id: glyphId[107],
    classId: classId[0],
    valyrianTranslation: "oz-",
    englishTranslation: "",
    prefix: "oz",
    imagePath: `image${108}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[108],
    classId: classId[0],
    valyrianTranslation: "gaos",
    englishTranslation: "nadir",
    prefix: "gaoh",
    imagePath: `image${109}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[109],
    classId: classId[4],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${110}.png`,
    alphabet: "",
    info: "nominal 3ter., action nouns -non",
    noTranslation: true,
    example: "",
  },
  //   {
  //     _id: glyphId[110],
  //     classId: classId[0],
  //     valyrianTranslation: "",
  //     englishTranslation: "",
  //     prefix: "",
  //     imagePath: `image${111}.png`,
  //     alphabet: "",
  //     info: "",
  //     noTranslation: false,
  //     example: "",
  //   },
  {
    _id: glyphId[111],
    classId: classId[0],
    valyrianTranslation: "laes",
    englishTranslation: "eye",
    prefix: "laeh",
    imagePath: `image${112}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Laehossa yne ōdris.",
  },
  {
    _id: glyphId[112],
    classId: classId[0],
    valyrianTranslation: "bal-",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${113}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[113],
    classId: classId[0],
    valyrianTranslation: "dārys",
    englishTranslation: "king",
    prefix: "dār",
    imagePath: `image${114}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Dārys azanti jōzigon kostos daor.",
  },
  {
    _id: glyphId[114],
    classId: classId[0],
    valyrianTranslation: "valyr-",
    englishTranslation: "valyria, fourteen flames",
    prefix: "valyr",
    imagePath: `image${115}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Nyke Daenerys Jelmāzmo hen Targārio Lentrot, hen Valyrio Uēpo ānogār iksan.",
  },
  {
    _id: glyphId[115],
    classId: classId[0],
    valyrianTranslation: "olvie",
    englishTranslation: "much",
    prefix: "olvi",
    imagePath: `image${116}.png`,
    alphabet: "",
    info: "nominal plural",
    noTranslation: false,
    example: "Olvī voktī Rulloro Qelbriā ūndessun daor.",
  },
  {
    _id: glyphId[116],
    classId: classId[0],
    valyrianTranslation: "ūly",
    englishTranslation: "hook",
    prefix: "ūl",
    imagePath: `image${117}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[117],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${118}.png`,
    alphabet: "a",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[118],
    classId: classId[2],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${119}.png`,
    alphabet: "",
    info: "nominal 6(sol.)?",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[119],
    classId: classId[0],
    valyrianTranslation: "morghon",
    englishTranslation: "death",
    prefix: "morgh",
    imagePath: `image${120}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Valar morghūlis.",
  },
  {
    _id: glyphId[120],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${121}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[121],
    classId: classId[1],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${122}.png`,
    alphabet: "",
    info: "nominal 1lun.",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[122],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${123}.png`,
    alphabet: "i:",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[123],
    classId: classId[0],
    valyrianTranslation: "kivo",
    englishTranslation: "footprint",
    prefix: "kivo",
    imagePath: `image${124}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[124],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${125}.png`,
    alphabet: "",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[125],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${126}.png`,
    alphabet: "",
    info: "lig. for “qrin-“?",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[126],
    classId: classId[0],
    valyrianTranslation: "perzys",
    englishTranslation: "fire",
    prefix: "perz",
    imagePath: `image${127}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Hen sȳndrorro, ōños. Hen ñuqīr, perzys. Hen morghot, glaeson.",
  },
  {
    _id: glyphId[127],
    classId: classId[0],
    valyrianTranslation: "jem-",
    englishTranslation: "leader",
    prefix: "jem",
    imagePath: `image${128}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Dārys azantī qubirī jemas.",
  },
  {
    _id: glyphId[128],
    classId: classId[2],
    valyrianTranslation: "zaldrīzes",
    englishTranslation: "dragon",
    prefix: "zaldrīz",
    imagePath: `image${129}.png`,
    alphabet: "",
    info: "nominal 4sol., venerability, dragon names",
    noTranslation: false,
    example: "Zaldrīzo ānogar.",
  },
  {
    _id: glyphId[129],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${130}.png`,
    alphabet: "z",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[130],
    classId: classId[0],
    valyrianTranslation: "qībi",
    englishTranslation: "shoulder",
    prefix: "qīb",
    imagePath: `image${131}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[131],
    classId: classId[3],
    valyrianTranslation: "ānogar",
    englishTranslation: "blood",
    prefix: "ānogr",
    imagePath: `image${132}.png`,
    alphabet: "",
    info: "nominal 1aq.",
    noTranslation: false,
    example: "Nyke Daenerys Jelmāzmo hen Targārio Lentrot, hen Valyrio Uēpo ānogār iksan.",
  },
  {
    _id: glyphId[132],
    classId: classId[5],
    valyrianTranslation: "oba",
    englishTranslation: "curve",
    prefix: "ob",
    imagePath: `image${133}.png`,
    alphabet: "",
    info: "adjectival class I",
    noTranslation: false,
    example: "",
  },
  {
    _id: glyphId[133],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${134}.png`,
    alphabet: "ɲ",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[134],
    classId: classId[0],
    valyrianTranslation: "",
    englishTranslation: "",
    prefix: "",
    imagePath: `image${135}.png`,
    alphabet: "k",
    info: "",
    noTranslation: true,
    example: "",
  },
  {
    _id: glyphId[135],
    classId: classId[0],
    valyrianTranslation: "ēdru-",
    englishTranslation: "sleep",
    prefix: "ēdru",
    imagePath: `image${136}.png`,
    alphabet: "",
    info: "",
    noTranslation: false,
    example: "Valar Ēdrussis.",
  },
];

export const classes = [
  {
    _id: classId[0],
    name: "Unknown",
  },
  {
    _id: classId[1],
    name: "Lunar",
  },
  {
    _id: classId[2],
    name: "Solar",
  },
  {
    _id: classId[3],
    name: "Aquatic",
  },
  {
    _id: classId[4],
    name: "Terrestrial",
  },
  {
    _id: classId[5],
    name: "Adjective",
  },
];