import { S3Client } from "my-test-lib/src";
const s3Test = new S3Client();
s3Test.getFile("some-key").then((res) => console.log(res));
