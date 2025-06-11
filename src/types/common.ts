import type { tabBarList } from "../constants/common";

type TabBarLabel = (typeof tabBarList)[number]["label"];

export type { TabBarLabel };
