var month;
function getSeason(month) {
    switch (month) {
        case 1: return 'Winter';
        case 2: return 'Winter';
        case 12: return 'Winter';
            break;
        case 3: return 'Spring';
        case 4: return 'Spring';
        case 5: return 'Spring';
            break;
        case 6: return 'Summer';
        case 7: return 'Summer';
        case 8: return 'Summer';
            break;
        case 9: return 'Autumn';
        case 10: return 'Autumn';
        case 11: return 'Autumn';
            break;
        default: return 'Error: Mounth no correct';
    }
}
getSeason(4);