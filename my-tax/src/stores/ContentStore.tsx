import RootStore from "./RootStore";
import Datas, { DataConfig } from "../static_data/Datas";
import { observable } from "mobx";
import { action } from "mobx";

export default class ContentStore {
  root: any = RootStore;

  @observable datas: Array<DataConfig> = Datas.Datas;
  @observable selectedData: Array<DataConfig> = Datas.Datas;

  constructor(root: RootStore) {
    this.root = root;
  }

  @action.bound
  onSearchClient(clientName: string) {
    let updateList = Datas.Datas;

    updateList = updateList.filter((data: DataConfig) => {
      return (
        data.clientName?.toLowerCase().search(clientName.toLowerCase()) !== -1
      );
    });

    this.searchList(updateList);
  }

  @action.bound
  onSelectedTab = (tabKey: string) => {
    console.log("tabKey", tabKey);

    switch (tabKey) {
      case "all":
        console.log("동작");

        this.initData(tabKey);

        break;

      case "매출과세":
        this.setTaxOutcome(tabKey);

        break;

      case "매출면세":
        this.setTaxFreeOutcome(tabKey);

        break;

      case "매입과세":
        this.setTaxIncome(tabKey);

        break;

      case "매입면세":
        this.setTaxFreeIncome(tabKey);

        break;

      case "매입카드":
        this.setCardIncome(tabKey);

        break;

      default:
        this.initData(tabKey);

        // this.setState({
        //   selectedData: tabKey,
        // });
        //return tabKey==='all';
        break;
    }
  };

  @action
  searchList(clientName: any) {
    this.selectedData = clientName;
  }

  @action
  initData(selectedData: any) {
    selectedData = this.datas;
  }

  @action
  setTaxOutcome(tabKey: any) {
    this.selectedData = this.datas.filter(
      (data: DataConfig) => data.typeCode === tabKey
    );
  }

  @action
  setTaxFreeOutcome(tabKey: any) {
    this.selectedData = this.datas.filter(
      (data: DataConfig) => data.typeCode === tabKey
    );
  }

  @action
  setTaxIncome(tabKey: any) {
    this.selectedData = this.datas.filter(
      (data: DataConfig) => data.typeCode === tabKey
    );
  }

  @action
  setTaxFreeIncome(tabKey: any) {
    this.selectedData = this.datas.filter(
      (data: DataConfig) => data.typeCode === tabKey
    );
  }

  @action
  setCardIncome(tabKey: any) {
    this.selectedData = this.datas.filter(
      (data: DataConfig) => data.typeCode === tabKey
    );
  }
}
