/* eslint-disable camelcase */
export const STRINGS = {
    READ_MORE: 'Read more',
};

export const describeSpaceShip = (
    length,
    model,
    starship_class,
    cargo_capacity,
    manufacturer,
) => (` the ${length} meters ${model} is a ${starship_class} with a cargo capacity of ${Number(cargo_capacity).toLocaleString()} manufactured by ${manufacturer}`);
