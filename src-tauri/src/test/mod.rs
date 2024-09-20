#[tauri::command]
pub fn my_custom_command() -> String {
    println!("test Nakub");
    return "From Rust backend Kub".into();
    // "test".to_string()
}
