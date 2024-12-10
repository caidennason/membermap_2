import requests
from django.conf import settings  # Import settings to access API key


def fetch_legislator_info_from_api(state_id):
    api_url = f"https://www.opensecrets.org/api/?method=getLegislators&id={state_id}&output=json&apikey={settings.OPENSECRETS_API_KEY}"
    
    try:
        response = requests.get(api_url)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error fetching data: {e}")
        return None
