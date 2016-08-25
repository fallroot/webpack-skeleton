import assert from 'assert';
import MyLibrary from '../src/main';

describe('MyLibrary#name', () => {
    it('should be equal with constructor parameter', () => {
        const myLibrary = new MyLibrary('webpack');

        assert(myLibrary.name, 'webpack');
    });
});
