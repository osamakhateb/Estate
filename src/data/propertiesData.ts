export interface PropertyData {
    title: string;
    description: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    location: string;
    propertyId: 'seaside' | 'metropolitan' | 'cottage';
}

export const propertiesData: PropertyData[] = [
    {
        title: 'Seaside Serenity Villa',
        description:
            'An elegant 6-bedroom, 6.5-bathroom townhouse in a gated community. A stunning 8-bedroom, 6-bathroom villa in a peaceful suburban neighborhood.6-bathroom villa in a peaceful suburban neighborhood.',
        price: 550000,
        bedrooms: 4,
        bathrooms: 3,
        location: 'Villa',
        propertyId: 'seaside',
    },
    {
        title: 'Metropolitan Haven',
        description:
            'An elegant 3-bedroom, 5.5-bathroom townhouse in a gated community. A stunning 4-bedroom, 2-bathroom villa in a peaceful suburban neighborhood.6-bathroom villa in a peaceful suburban neighborhood.',
        price: 350000,
        bedrooms: 2,
        bathrooms: 2,
        location: 'Villa',
        propertyId: 'metropolitan',
    },
    {
        title: 'Rustic Cottage',
        description:
            'An elegant 4-bedroom, 7.5-bathroom townhouse in a gated community. A stunning 3-bedroom, 4-bathroom villa in a peaceful suburban neighborhood.6-bathroom villa in a peaceful suburban neighborhood.',
        price: 275000,
        bedrooms: 3,
        bathrooms: 3,
        location: 'Villa',
        propertyId: 'cottage',
    },
];
