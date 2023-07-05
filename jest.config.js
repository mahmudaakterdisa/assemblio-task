module.exports = {
    transform: {
        '^.+\\.tsx?$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.css$': '<rootDir>/__mocks__/styleMock.js',
    },
};
