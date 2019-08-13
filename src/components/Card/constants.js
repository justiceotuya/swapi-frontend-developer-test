/* eslint-disable camelcase */
export const STRINGS = {
    LOREM_FILLER_TEXT: `Lorem ipsum dolor, sit amet consectetur
    adipisicing elit.Ea harum necessitatibus dolore labore sit aliquam
    vitae, beatae provident minus? Repellendus!`,
    READ_MORE: 'Read more',
};

export const describeSpaceShip = (
    length,
    name,
    model,
    starship_class,
    cargo_capacity,
    manufacturer,
) => (` the ${length} meters, ${name} model ${model} is a ${starship_class} with a cargo capacity
of ${Number(cargo_capacity).toLocaleString()} manufactured by ${manufacturer}`);
