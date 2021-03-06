/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as ENUMS from './typeEnums'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

export type Image = {
  url: String;
  altText: String;
}

export type Clothing = {
  available: Boolean;
  brand: String;
  category: String;
  color: Array<ENUMS.ClothingColor>;
  condition: ENUMS.ClothingCondition;
  datePosted: Date;
  description: String;
  id: String;
  image: Image;
  offerType: ENUMS.ClothingOfferType;
  sellerId: Number;
  size: ENUMS.ClothingSize | ENUMS.ClothingPantsSize;
  title: String;
};

export type User = {
  classYear: Number;
  email: String;
  firstName: String;
  garmentsBorrowed: Array<Clothing>;
  garmentsBought: Array<Clothing>;
  garmentsLent: Array<Clothing>;
  garmentsSold: Array<Clothing>;
  lastName: String;
  listBubbles: Array<String>;
  listFriends: Array<String>;
  numGarmentsBorrowed: Number;
  numGarmentsBought: Number;
  numGarmentsLent: Number;
  numGarmentsSold: Number;
  residentialCollege: String;
  userId: String;
  username: String;
};

export type Bubble = {
  adminId: Number;
  id: String;
  privacy: ENUMS.BubblePrivacy;
  color: String;
  name: String;
  userIds: Array<String>;
}

export type BubblesById = {
  [key: string]: Bubble;
}

export type ClothesById = {
  [key: string]: Clothing;
}

export type Exchange = {
  buyer: Number;
  id: String;
  date: Date;
  price: Number;
  seller: Number;
};


export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  ClothingFeedTab: undefined;
  TabTwo: undefined;
  ExchangeTab: undefined;
  BubblesTab: undefined;
  TabFive: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
