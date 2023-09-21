export default function cleanseBigInt(json) {
  return JSON.stringify(json, (key, value) =>
    typeof value === 'bigint' ? value.toString() : value
  );
}
