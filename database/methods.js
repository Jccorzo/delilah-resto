const sequelize = require('./conexion')

module.exports.get = async (query, replacements) => {
    const response = await sequelize.query(query, {
        replacements,
        type: sequelize.QueryTypes.SELECT
    });
    return response
}

module.exports.insert = async (query, replacements) => {
    const response = await sequelize.query(query, {
        replacements,
        type: sequelize.QueryTypes.INSERT
    });
    return response
}

module.exports.update = async (query, replacements) => {
    const response = await sequelize.query(query, {
        replacements,
        type: sequelize.QueryTypes.UPDATE
    });
    return response
}

module.exports.remove = async (query, replacements) => {
    const response = await sequelize.query(query, {
        replacements,
        type: sequelize.QueryTypes.UPDATE
    });
    return response
}

