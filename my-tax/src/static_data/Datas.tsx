import {
  BlockOutlined,
  ProfileOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

export type CategoryTabConfig = {
  tabTitle?: string | React.ReactNode;
  key?: string;
};

export type DataConfig = {
  date?: string;
  typeCode?: string;
  DeductionYN?: string;
  productName?: string;
  supplyValue?: string;
  surtax?: string;
  total?: string;
  clientCode?: number;
  clientName?: string;
  identity?: string;
  electronic?: string;
  cardNumber?: string;
  cardCode?: number;
  defaultAccountCode?: number;
  defaultAccountName?: string;
  relationAccountCode?: number;
  relationAccountName?: string;
  collectionEnd?: string;
};

const Category: Array<CategoryTabConfig> = [
  {
    tabTitle: (
      <div>
        <BlockOutlined />
        전체
      </div>
    ),
    key: "all",
  },
  {
    tabTitle: (
      <div>
        <ProfileOutlined />
        매출과세
      </div>
    ),
    key: "taxOutcome",
  },
  {
    tabTitle: (
      <div>
        <ProfileOutlined />
        매출면세
      </div>
    ),
    key: "taxFreeOutcome",
  },
  {
    tabTitle: (
      <div>
        <ProfileOutlined />
        매입과세
      </div>
    ),
    key: "taxIncome",
  },
  {
    tabTitle: (
      <div>
        <ProfileOutlined />
        매입면세
      </div>
    ),
    key: "taxFreeIncome",
  },
  {
    tabTitle: (
      <div>
        <CreditCardOutlined />
        매입카드
      </div>
    ),
    key: "cardIncome",
  },
];

const Columns = [
  { title: "날짜", dataIndex: "date", key: "date" },
  { title: "유형코드", dataIndex: "typeCode", key: "code" },
  { title: "불공제", dataIndex: "DeductionYN", key: "DeductionYN" },
  { title: "품명", dataIndex: "productName", key: "productName" },
  { title: "공급가액", dataIndex: "supplyValue", key: "supplyValue" },
  { title: "부가세", dataIndex: "surtax", key: "surtax" },
  { title: "합계", dataIndex: "total", key: "total" },
  { title: "거래처코드", dataIndex: "clientCode", key: "clientCode" },
  { title: "거래처명", dataIndex: "clientName", key: "clientName" },
  { title: "사업,주민번호", dataIndex: "identity", key: "identity" },
  { title: "전자", dataIndex: "electronic", key: "electronic" },
  { title: "카드번호", dataIndex: "cardNumber", key: "cardNumber" },
  { title: "카드코드", dataIndex: "cardCode", key: "cardCode" },
  {
    title: "기본계정코드",
    dataIndex: "defaultAccountCode",
    key: "defaultAccountCode",
  },
  {
    title: "기본계정명",
    dataIndex: "defaultAccountName",
    key: "defaultAccountName",
  },
  {
    title: "상대계정코드",
    dataIndex: "relationAccountCode",
    key: "relationAccountCode",
  },
  {
    title: "상대계정명",
    dataIndex: "relationAccountName",
    key: "relationAccountName",
  },
  { title: "수집마감", dataIndex: "collectionEnd", key: "collectionEnd" },
];

const Datas: Array<DataConfig> = [
  {
    date: "2020-02-01",
    typeCode: "매출과세",
    DeductionYN: "John Carnell",
    productName: "Manning",
    supplyValue: "11111",
    surtax: "22222",
    total: "33333",
    clientCode: 1,
    clientName: "ddd",
    identity: "111-11",
    electronic: "Y",
    cardNumber: "3333-33-33",
    cardCode: 11,
    defaultAccountCode: 2,
    defaultAccountName: "dd",
    relationAccountCode: 3,
    relationAccountName: "dd",
    collectionEnd: "dd",
  },

  {
    date: "9781617293986",
    typeCode: "매출과세",
    DeductionYN: "John Carnell",
    productName: "Manning",
    supplyValue: "59.92",
    surtax: "222",
    total: "111",
    clientCode: 1,
    clientName: "ttt",
    identity: "111-11",
    electronic: "Y",
    cardNumber: "3333-33-33",
    cardCode: 11,
    defaultAccountCode: 2,
    defaultAccountName: "dd",
    relationAccountCode: 3,
    relationAccountName: "dd",
    collectionEnd: "dd",
  },

  {
    date: "9781617293986",
    typeCode: "매입과세",
    DeductionYN: "John Carnell",
    productName: "Manning",
    supplyValue: "59.92",
    surtax: "111",
    total: "222",
    clientCode: 1,
    clientName: "ddd",
    identity: "111-11",
    electronic: "Y",
    cardNumber: "3333-33-33",
    cardCode: 11,
    defaultAccountCode: 2,
    defaultAccountName: "dd",
    relationAccountCode: 3,
    relationAccountName: "dd",
    collectionEnd: "dd",
  },

  {
    date: "9781617293986",
    typeCode: "매출면세",
    DeductionYN: "John Carnell",
    productName: "Manning",
    supplyValue: "59.92",
    surtax: "book_images/spring.jpg",
    total: "Sprinms.",
    clientCode: 1,
    clientName: "ㅗ",
    identity: "111-11",
    electronic: "Y",
    cardNumber: "3333-33-33",
    cardCode: 11,
    defaultAccountCode: 2,
    defaultAccountName: "dd",
    relationAccountCode: 3,
    relationAccountName: "dd",
    collectionEnd: "dd",
  },

  {
    date: "9781617293986",
    typeCode: "매입면세",
    DeductionYN: "John Carnell",
    productName: "Manning",
    supplyValue: "59.92",
    surtax: "book_images/spring.jpg",
    total: "Sprirms.",
    clientCode: 1,
    clientName: "ooo",
    identity: "111-11",
    electronic: "Y",
    cardNumber: "3333-33-33",
    cardCode: 11,
    defaultAccountCode: 2,
    defaultAccountName: "dd",
    relationAccountCode: 3,
    relationAccountName: "dd",
    collectionEnd: "dd",
  },

  {
    date: "9781617293986",
    typeCode: "매입카과",
    DeductionYN: "John Carnell",
    productName: "Manning",
    supplyValue: "59.92",
    surtax: "book_images/spring.jpg",
    total: "Sprirms.",
    clientCode: 1,
    clientName: "ooo",
    identity: "111-11",
    electronic: "Y",
    cardNumber: "3333-33-33",
    cardCode: 11,
    defaultAccountCode: 2,
    defaultAccountName: "dd",
    relationAccountCode: 3,
    relationAccountName: "dd",
    collectionEnd: "dd",
  },

  {
    date: "9781617293986",
    typeCode: "매입카과",
    DeductionYN: "John Carnell",
    productName: "Manning",
    supplyValue: "59.92",
    surtax: "book_images/spring.jpg",
    total: "Sprirms.",
    clientCode: 1,
    clientName: "ooo",
    identity: "111-11",
    electronic: "Y",
    cardNumber: "3333-33-33",
    cardCode: 11,
    defaultAccountCode: 2,
    defaultAccountName: "dd",
    relationAccountCode: 3,
    relationAccountName: "dd",
    collectionEnd: "dd",
  },

  {
    date: "9781617293986",
    typeCode: "매출면세",
    DeductionYN: "John Carnell",
    productName: "Manning",
    supplyValue: "59.92",
    surtax: "book_images/spring.jpg",
    total: "Sprirms.",
    clientCode: 1,
    clientName: "ooo",
    identity: "111-11",
    electronic: "Y",
    cardNumber: "3333-33-33",
    cardCode: 11,
    defaultAccountCode: 2,
    defaultAccountName: "dd",
    relationAccountCode: 3,
    relationAccountName: "dd",
    collectionEnd: "dd",
  },

  {
    date: "9781617293986",
    typeCode: "매입과세",
    DeductionYN: "John Carnell",
    productName: "Manning",
    supplyValue: "59.92",
    surtax: "book_images/spring.jpg",
    total: "Sprirms.",
    clientCode: 1,
    clientName: "ooo",
    identity: "111-11",
    electronic: "Y",
    cardNumber: "3333-33-33",
    cardCode: 11,
    defaultAccountCode: 2,
    defaultAccountName: "dd",
    relationAccountCode: 3,
    relationAccountName: "dd",
    collectionEnd: "dd",
  },
];

export default { Datas, Category, Columns };
