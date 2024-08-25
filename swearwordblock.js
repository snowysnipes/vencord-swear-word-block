// swearFilter.js

const swearPatterns = [
    // Add patterns for common swear words and their obfuscated forms
    /f[\*]?u[\*]?c[\*]?k/gi,
    /n[\*]?i[\*]?g[\*]?g[\*]?e[\*]?r/gi,
    /mother[\*]?f[\*]?u[\*]?c[\*]?k[\*]?e[\*]?r/gi,
    /s[\*]?e[\*]?x/gi,
    /b[\*]?i[\*]?t[\*]?c[\*]?h/gi,
    /c[\*]?u[\*]?n[\*]?t/gi,
    /d[\*]?i[\*]?c[\*]?k/gi,
    /p[\*]?u[\*]?ss[\*]?y/gi,
    /a[\*]?s[\*]?s[\*]?h[\*]?o[\*]?l[\*]?e/gi,
    /sh[\*]?i[\*]?t/gi,
    /c[\*]?o[\*]?c[\*]?k[\*]?s[\*]?u[\*]?c[\*]?k[\*]?e[\*]?r/gi,
    /m[\*]?o[\*]?t[\*]?h[\*]?e[\*]?r[\*]?f[\*]?u[\*]?c[\*]?k[\*]?e[\*]?r/gi,
    // Add more patterns if needed
];

function replaceSwearWords(text) {
    let newText = text;
    swearPatterns.forEach(pattern => {
        newText = newText.replace(pattern, match => '*'.repeat(match.length));
    });
    return newText;
}

const { WebpackModules, Patcher } = require('vendetta');
const Chat = WebpackModules.getByProps('sendMessage');

Patcher.after(Chat, 'sendMessage', (_, [channel, message], res) => {
    if (message && message.content) {
        message.content = replaceSwearWords(message.content);
    }
    return res;
});
