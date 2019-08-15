export const VIEW_MORE = 'VIEW MORE';

export const getPaginationDetails = (firstItemCount,
    lastItemCount,
    dataSize) => `${firstItemCount} - ${lastItemCount} of ${dataSize}`;
