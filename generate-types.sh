npx openapi-generator-cli generate \
  -i http://localhost:5000/api-yaml \
  -o src/openapi \
  -g typescript-fetch \
  --additional-properties=supportsES6=true,npmVersion=6.9.0,modelPropertyNaming=original,withoutRuntimeChecks=true


[ ! -d "src/types" ] && mkdir src/types
mv src/openapi/models/index.ts src/types/models.ts
rm -rf src/openapi