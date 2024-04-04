import { atom } from "recoil";

export const NotesState = atom<any[] | null>({
  key: "Notes",
  default: null,
});

export const SumState = atom<number>({
  key: "Sum",
  default: 0,
});

export const CountState = atom<number>({
  key: "Count",
  default: 0,
});

export const TotalState = atom<number>({
  key: "Total",
  default: 0,
});

export const TodayState = atom<number>({
  key: "Today",
  default: 0,
});

export const ItemState = atom<any[] | null>({
  key: "Item",
  default: null,
});
