module.exports = function (api) {
    api.cache(true);
    const isProduction = process.env.NODE_ENV === 'production';
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            // Strip all console.* calls in production builds to avoid leaking
            // sensitive error details in release APKs/IPAs.
            ...(isProduction ? [['transform-remove-console', { exclude: [] }]] : []),
        ],
    };
};
