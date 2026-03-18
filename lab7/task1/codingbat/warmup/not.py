def not_string(str):
    if len(str) > 0 and str[:3] == "not":
        return str
    else: return "not" + str