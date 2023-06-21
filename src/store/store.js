import { atom } from 'recoil';

export const drawModalState = atom({ key: 'drawModalState', default: { crop: true, tag: false, finish: false } });

export const menuState = atom({ key: 'menuState', default: 'pictogram' });
