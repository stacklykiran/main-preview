 @media (max-width: 1023px) {
      .auth-form-card { min-height: 100svh; width: 100%; }
      .auth-image-col { display: none !important; }
      .hero-container { min-height: 400px; }
    }
   @media (max-width: 768px) {
  .hero-illustration {
    /* Keep your horizontal focus at 70% */
    object-position: 67% 0%; 
    
    /* Increase scale to 1.3 (30% zoom) to create room to move */
    /* Use translateY to physically push the image UP (-10% or -20%) */
    transform: scale(1.2) translateY(-4.5%);
    
    /* Ensures the scaled image doesn't create gaps on the sides */
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 1023px) {
    .auth-form-card { min-height: 100svh; width: 100%; }
    .auth-image-col { display: none !important; }
    .hero-container { min-height: 400px; }
  }

  @media (max-width: 768px) {
    .hero-illustration {
      /* Keep your focus point */
      object-position: 67% 0%; 
      
      /* Use scale and translateY together */
      /* transform-origin: top ensures scaling happens from the top down */
      transform: scale(1.25);
      transform-origin: top; 
      
      /* Move the image UP to remove the empty space */
      top: -30px; 
      
      width: 100%;
      height: 100%;
      position: absolute;
    }

    /* Important: Ensure the container hides the parts we moved out of bounds */
    .hero-container {
      overflow: hidden !important;
      min-height: 350px; /* Adjusting height for better mobile fit */
    }
  }