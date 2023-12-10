from flask import Flask, jsonify
import config

app = Flask(__name__)

@app.route('/api-key', methods=['GET'])
def get_api_key():
    return jsonify({'api_key': config.CHAT_GPT_API_Key})

if __name__ == '__main__':
    app.run(debug=True)
