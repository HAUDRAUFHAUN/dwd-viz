export async function get() {
    const response = await fetch(
      "https://s3.eu-central-1.amazonaws.com/app-prod-static.warnwetter.de/v16/sea_warning_text.json"
    );
  
    if (response.ok) {
      const station = await response.json();
      return {
        body: station,
      };
    } else {
      return { error: new Error(), body: undefined };
    }
  }
  