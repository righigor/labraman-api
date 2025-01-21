export default ({ env }) => ({
  "gen-types": {
    enabled: true,
    config: {
      outputLocation: "myTypes.ts",
      // If this is true, then the outputLocation should be the location to a .ts file
      singleFile: true,
    },
  },
  'webp-converter': {
    enabled: true,
    config: {
      // mimeTypes that converts to WebP. Default is ['image/png', 'image/jpeg', 'image/jpg']
      mimeTypes: undefined,
      options: {
        // WebP options: https://sharp.pixelplumbing.com/api-output#webp
      },
    },
  },
});
