const formatVolumeIconPath = require('../assets/scripts/main');

describe('The volume\'s value changes the volume icon.', () => {
    iconLevel0Bounds();
    iconLevel1Bounds();
    iconLevel2Bounds();
    iconLevel3Bounds();
});

function iconLevel0Bounds() {
    test('Volume is zero, then change icon to level 0', () => {
        expect(formatVolumeIconPath(0)).toMatch(
            './assets/media/icons/volume-level-0.svg');
    });
    test('Volume is under zero, then change icon to level 0', () => {
        expect(formatVolumeIconPath(-1)).toMatch(
            './assets/media/icons/volume-level-0.svg');
    });
}

function iconLevel1Bounds() {
    test('Volume is 1, then change icon to level 1', () => {
        expect(formatVolumeIconPath(1)).toMatch(
            './assets/media/icons/volume-level-1.svg');
    });
    test('Volume is 33, then change icon to level 1', () => {
        expect(formatVolumeIconPath(33)).toMatch(
            './assets/media/icons/volume-level-1.svg');
    });
}

function iconLevel2Bounds() {
    test('Volume is 34, then change icon to level 2', () => {
        expect(formatVolumeIconPath(34)).toMatch(
            './assets/media/icons/volume-level-2.svg');
    });
    test('Volume is 66, then change icon to level 2', () => {
        expect(formatVolumeIconPath(66)).toMatch(
            './assets/media/icons/volume-level-2.svg');
    });
}

function iconLevel3Bounds() {
    test('Volume is 67, then change icon to level 3', () => {
        expect(formatVolumeIconPath(67)).toMatch(
            './assets/media/icons/volume-level-3.svg');
    });
    test('Volume is 100, then change icon to level 3', () => {
        expect(formatVolumeIconPath(100)).toMatch(
            './assets/media/icons/volume-level-3.svg');
    });
    test('Volume is 101, then change icon to level 3', () => {
        expect(formatVolumeIconPath(101)).toMatch(
            './assets/media/icons/volume-level-3.svg');
    });
}