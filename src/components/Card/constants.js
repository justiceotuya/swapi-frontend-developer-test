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

export const describePlanet = data => {
    const {
        climate,
        diameter,
        terrain,
        population,
        name,
        rotation_period,
        orbital_period,
        surface_water,
        gravity,
    } = data;
    return (
        `${name} is a ${climate} planet with a diameter of
        ${diameter.toLocaleString()} kilometers, it has a
        ${terrain} and is home to about ${population.toLocaleString()} species.

${name} has a ${rotation_period.toLocaleString()} hour rotation period ,
 ${orbital_period} obital period , ${surface_water}%  ans its gravity is ${gravity}`
    );
};
