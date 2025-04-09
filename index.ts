interface ImagePaths {
  HOME: string;
  DELUXE_DOUBLE_BATH: string;
  DELUXE_DOUBLE_TWIN: string;
  DELUXE_DOUBLE: string;
  DELUXE_DOUBLE_SHOWER: string;
  BUDGET_DOUBLE: string;
}

export const IMAGES: ImagePaths = {
  HOME: '1.png',
  DELUXE_DOUBLE_BATH: 'deluxedoubleroomwithbath4/1.png',
  DELUXE_DOUBLE_TWIN: 'deluxedoubleortwinroom7/4.png',
  DELUXE_DOUBLE: 'deluxedoubleroom7/3.png',
  DELUXE_DOUBLE_SHOWER: 'deluxedoubleroomwithshower6/3.png',
  BUDGET_DOUBLE: 'budgetdoubleroom9/8.png'
} as const;
